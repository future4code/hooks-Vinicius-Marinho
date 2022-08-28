import { arrayUsers, User, Transação } from "./data";
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/account", (req: Request, res: Response)=>{
    res.send(arrayUsers)
})

app.post("/account/create", (req: Request, res: Response)=>{
    let errorCode = 400        
    try {
         let {name, cpf, nascimento,data} = req.body
 
         if(!name || !cpf || !nascimento || !data){
             errorCode = 422
             throw new Error("Dados imcompletos.")
         }
         const calculaIdade = (nascimento: any,data:any )=>{
             let partesNascimento = nascimento.split("/")
             let diaNascimento = Number(partesNascimento[0])
             let mesNascimento = Number(partesNascimento[1])
             let anoNascimento = Number(partesNascimento[2])
 
             let partesData = data.split("/")
             let diaData = Number(partesData[0])
             let mesData = Number(partesData[1])
             let anoData = Number(partesData[2])
             
             let idade
             
             if(mesData > mesNascimento || (mesData === mesNascimento && diaData > diaNascimento)){
                 idade = anoData-anoNascimento
                 return idade
             } else if ( mesData < mesNascimento ||(mesData === mesNascimento && diaData <= diaNascimento) ){
                 idade = anoData-anoNascimento-1
                 return idade
             }        
         }
             
         const idade = calculaIdade(nascimento,data)
 
         if(idade && idade < 18){
             errorCode = 401
             throw new Error ("É nescessário ter mais de 18 anos.") }
 
         const buscarCPF = arrayUsers.find(userCpf => userCpf.cpf === cpf )
 
         if(buscarCPF) {
             errorCode = 401
             throw new Error ("CPF já cadastrado")  }
 
         const user:User = {
             id: generateId(),
             name,
             cpf,
             nascimento,
             saldo: 0,
             extrato: [{valor: 0, data: data, descrição: "Depósito em dinheiro"}]
         }
 
         arrayUsers.push(user)
         res.status(201).send(arrayUsers)
 
    } catch (error:any) {
         res.status(errorCode).send(error.message)
     
    } 
 })

app.post("/account/payment",(req: Request, res: Response)=>{
    let errorCode = 400  
try {
   let {valor, cpf, vencimento} = req.body

   if(!vencimento) {
    vencimento = new Date().toLocaleDateString()
    }
    
    
    for (const user of arrayUsers) {
        if(user.cpf === cpf){
          let operação = user.extrato
          for (let index = 0; index < operação.length; index++) {
                          
            let hoje = new Date().toLocaleDateString()

            let partesHoje = hoje.split("/")
            let diaHoje = Number(partesHoje[0])
            let mesHoje = Number(partesHoje[1])
            let anoHoje = Number(partesHoje[2])

            let partesVencimento = vencimento.split("/")
            let diaVencimento = Number(partesVencimento[0])
            let mesVencimento = Number(partesVencimento[1])
            let anoVencimento = Number(partesVencimento[2])

            if(anoHoje > anoVencimento || (mesHoje > mesVencimento && anoHoje >= anoVencimento) || (diaHoje > diaVencimento && mesHoje > mesVencimento && anoHoje > anoVencimento )){
                  errorCode = 401
                  throw new Error ("Data de vencimento não pode ser anterior a hoje.")
                  
              } 
              
            
          }
          
        }         
          
      } 

    if(!valor) {
        errorCode = 422
        throw new Error ("Informe valor a ser pago.")
    }
    if(!cpf) {
        errorCode = 422
        throw new Error ("Informe seu CPF.")
    } 
    
    const newUser = arrayUsers.find((user)=>
        (user.cpf as string) === (cpf as string))
            
    if(!newUser){
        errorCode = 404
        throw new Error("Usuário não encontrado")
    }

    if(valor > newUser.saldo){
        errorCode = 401
        throw new Error("Saldo insuficiente.")
    }

    newUser.extrato.push({valor, data: vencimento, descrição: "Pagamento de conta."})
    
    res.status(201).send("Pagamento agendado com sucesso.")
   
}
catch (error:any) {
    res.status(errorCode).send(error.message)

}

})

app.post("/account/transfer",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const {cpfOrigem, cpfDestino, nameOrigem, nameDestino, valor} = req.body
    
    if(!cpfOrigem){
        errorCode = 422
        throw new Error ("Digite CPF do titular da conta de origem.")
    }
    if(!cpfDestino){
        errorCode = 422
        throw new Error ("Digite CPF do titular da conta de destino.")
    }
    if(!nameOrigem){
        errorCode = 422
        throw new Error ("Digite nome do titular da conta de origem.")
    }
    if(!nameDestino){
        errorCode = 422
        throw new Error ("Digite nome do titular da conta de origem.")
    }
    if(!valor){
        errorCode = 422
        throw new Error ("Digite valor da transferencia")
    }

    const userOrigem = arrayUsers.find((user)=>(user.cpf as string) === (cpfOrigem as string))
    
    if(!userOrigem || userOrigem.name !== nameOrigem) {
        errorCode = 404
        throw new Error("Conta de origem não encontada")
    }

    userOrigem.extrato.push({valor, data: new Date().toLocaleDateString(), descrição: "Pagamento de conta."})
    
    if(valor > userOrigem.saldo){
        errorCode = 401
        throw new Error ("Saldo insuficiente.")
    }

    const userDestino = arrayUsers.find((user)=>(user.cpf as string) === (cpfDestino as string))
    
    
    if(!userDestino || (userDestino.name as string) !== (nameDestino as string)) {
        errorCode = 404
        throw new Error("Conta de destino não encontada")
    }
    
    userDestino.extrato.push({valor, data: new Date().toLocaleDateString(), descrição: "Deposito de dinheiro."})
    
    res.status(201).send("ok")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})  

app.put("/account/searchSaldo/:cpf",(req: Request, res: Response)=>{
    let errorCode = 400  
    try {
    const userCpf = req.params.cpf

    if(!userCpf) {
        errorCode = 422
        throw new Error ("Digite um CPF.")}
    
    const user = arrayUsers.find(user=>user.cpf === userCpf)
    
    if(!user){
        errorCode = 404
        throw new Error ("Usuário não encontrado.")}

    res.status(200).send(`O saldo de ${user.name} é R$ ${user.saldo}`)
    
   } catch (error:any) {
    res.status(errorCode).send(error.message)
   } 
    
})

app.put("/account/addValor",(req: Request, res: Response)=>{
    let errorCode = 400  
    try {
       
        const {valor,name ,cpf}= req.body

        if(!cpf || !name || !valor ){
            errorCode = 422
            throw new Error ("informe nome e CPF e valor.")}

        const user = arrayUsers.find(user=>user.cpf === cpf)

        if(!user){
            errorCode = 404
            throw new Error ("Usuário não encontrado")}
        
        if(user.name !== name){
            errorCode = 401
            throw new Error("Nome ou CPF invalidos.")}

        user.saldo = user.saldo + valor

        user.extrato.push({valor: valor, data: new Date().toLocaleDateString(), descrição: "Depósito de dinheiro."})
        
        res.status(201).send("Deposito realizado com sucesso")
    }
    catch (error:any) {
        res.status(errorCode).send(error.message)

    }
    
})

app.put("/account/saldo/:cpf",(req: Request, res: Response)=>{
    let errorCode = 400  
    try {
        const cpf = req.params.cpf
        let debito = 0
        let credito = 0
        if(!cpf){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        
        for (const user of arrayUsers) {
          if(user.cpf === cpf){
            let operação = user.extrato
            for (let index = 0; index < operação.length; index++) {
              const transação = operação[index];
                
                let hoje = new Date().toLocaleDateString()

              let partesHoje = hoje.split("/")
              let diaHoje = Number(partesHoje[0])
              let mesHoje = Number(partesHoje[1])
              let anoHoje = Number(partesHoje[2])
  
              let partesData = transação.data.split("/")
              let diaData = Number(partesData[0])
              let mesData = Number(partesData[1])
              let anoData = Number(partesData[2])

                if(anoHoje >= anoData && mesHoje >= mesData && diaHoje >= diaData ){
                    if((transação.descrição as string) === "Pagamento de conta."){
                        debito = debito + transação.valor
                    } else if((transação.descrição as string) === "Deposito em dinheiro.") {
                        credito = credito + transação.valor
                    }
                    
                    
                } 
                
              
            }
            user.saldo = user.saldo + credito - debito
          }         
            
        } 
        res.status(201).end()
    }
    
    catch (error:any) {
        res.status(errorCode).send(error.message)

    }
    
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
