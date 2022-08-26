import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { arrayUsers, Transation, UserAcount } from "./data";
import { v4 as generateId } from "uuid";


const app = express();
app.use(express.json());
app.use(cors());

app.post("/account/create", (req: Request, res: Response)=>{
    
    const {name, cpf, dataNascimento} = req.body
    
    const initialTransation ={
        valor: 0,
        data: "",
        description: ""
    }

    try {

        if(!name || !cpf || !dataNascimento){
            res.status(422).send("Dados incompletos")
        }

        const searchCPF = arrayUsers.find((user)=> {
            if(user.cpf === cpf){
                res.status(409).send("CPF já cadastrado")
            }
        })

        const user:UserAcount = {
            id: generateId(),
            userId: generateId(),
            name,
            cpf,
            dataNascimento,
            saldo: 0,
            extrato: initialTransation
        }

        arrayUsers.push(user)

        // res.status(201).send("Cadastro realizado com sucesso")
        res.status(201).send(user)

        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
})

app.get("/users",(req: Request, res: Response)=>{
    res.status(200).send(arrayUsers)
})

app.get("/account/search/:cpf",(req: Request, res: Response)=>{
   
    try {

        const userCpf = req.params.cpf

        const user = arrayUsers.find((user)=> user.cpf === userCpf)
      
        if(!user){
            res.status(404).send("Usuário não encontrado"
        )}
        const saldo =(user?.saldo)
        res.status(201).send(saldo)
        
    } catch (error:any) {
        res.status(500).send(error.message)        
    }
    
})

app.put("/user/addValor",(req: Request, res: Response)=>{

    try {

        const {name, cpf, valor } = req.body

        if(!name || !cpf || !valor) res.status(422).send("Digite nome, cpf e valor a ser depositado")

        const user = arrayUsers.find((user)=>{
            (user.name === name && user.cpf === cpf)
            const novoSaldo = Number(user.saldo) + Number(valor)
            user.saldo = novoSaldo
            user.extrato.data = new Date().toISOString()
            user.extrato.valor = valor
            user.extrato.description = "Deposito de dinheiro"
            return user
        })
        console.log(user)
        res.status(201).send(user)
        
    } catch (error:any) {
        res.status(500).send(error.message)
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