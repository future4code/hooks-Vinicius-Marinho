import { users, USER_TYPE, User } from './data';
import express, { Request, Response } from "express"
import cors from "cors"
import { v4 as generateId } from 'uuid';

const app = express()

app.use(express.json())
app.use(cors())


//1-a) GET / b) "/users"

app.get("/users",(req: Request, res: Response)=>{
    res.send(users)
})

//2)a) através de query params, pois é mais indicado para busca dentro de um conjunto.

//b) if((type !== "ADMIN" && type !== "NORMAL")||(!type)){
//     errorCode = 401
//     throw new Error ("Forneça um type válido")
// }

app.get("/users/type",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const type = (req.query.type as string).toUpperCase()

        if((type !== "ADMIN" && type !== "NORMAL")||(!type)){
            errorCode = 401
            throw new Error ("Forneça um type válido")
        }

        const typeUser = []

        for (let user of users) {
            if(user.type === type){
                typeUser.push(user)
            }
        }

        if(!typeUser){
            errorCode = 404
            throw new Error("Não encontrado.")
        }
        

        res.status(200).send(typeUser)
        

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
    
    
})

//3)a) path params

app.get("/users/:name",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const name = req.params.name

        let newUsers:User[] = []

        for (let user of users) {
            if(user.name === name){
               newUsers.push(user)
            }
        }

        if(newUsers.length === 0){
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }
            
        res.send(newUsers)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
    
    
})


//4)

app.post("/users",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const {name, email, age} = req.body
        const type = (req.body.type as string).toUpperCase()

        if(!name ){
            errorCode = 422 
            throw new Error("Digite um nome")
        }
        if(!email ){
            errorCode = 422 
            throw new Error("Digite um email")
        }
        if(! type){
            errorCode = 422 
            throw new Error("Digite um type")
        }
        if(!age) {
            errorCode = 422 
            throw new Error("Digite a idade")
        }
        if(type !== "ADMIN" && type !== "NORMAL"){
            errorCode = 401 
            throw new Error("Type invalido")
        }
        
        if(type === "ADMIN"){
           const  newUser = {
                id: generateId(), 
                name, 
                email, 
                type: USER_TYPE.ADMIN,
                age  
            } 
            users.push(newUser)
        } else if( type === "NORMAL"){
           const  newUser = {
                id: generateId(), 
                name, 
                email, 
                type: USER_TYPE.NORMAL,
                age             
            }
            users.push(newUser)
        }

        

        res.send("Usuário adicionado.")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
    
    
})

//a) nada
//b) não, pois por boa pratica o put é utilizado para modificar um conteudo ja exitente.

app.put("/users",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const {name, email, age} = req.body
        const type = (req.body.type as string).toUpperCase()

        if(!name ){
            errorCode = 422 
            throw new Error("Digite um nome")
        }
        if(!email ){
            errorCode = 422 
            throw new Error("Digite um email")
        }
        if(! type){
            errorCode = 422 
            throw new Error("Digite um type")
        }
        if(!age) {
            errorCode = 422 
            throw new Error("Digite a idade")
        }
        if(type !== "ADMIN" && type !== "NORMAL"){
            errorCode = 401 
            throw new Error("Type invalido")
        }
        
        if(type === "ADMIN"){
           let  newUser = {
                id: generateId(), 
                name, 
                email, 
                type: USER_TYPE.ADMIN,
                age  
            } 
            users.push(newUser)
        } else if( type === "NORMAL"){
           let  newUser = {
                id: generateId(), 
                name, 
                email, 
                type: USER_TYPE.NORMAL,
                age             
            }
            users.push(newUser)
        }

        

        res.send("Usuário adicionado.")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
    
    
})

//5)

app.put("/users/edit",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const user = users[users.length-1]

        let newUserName = user.name.split(" ")

        user.name = `${newUserName[0]} - ALTERADO`

        res.status(201).end()
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//6)
app.patch("/users/edit",(req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const user = users[users.length-1]

        let newUserName = user.name.split(" ")

        user.name = `${newUserName[0]} - REALTERADO`

        res.status(201).end()
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//7)

app.delete("/users/:id", (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        const id = req.params.id

        const user = users.find(user=>(user.id).toString() === id.toString())
        
        if(!user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        const newUser = users.filter((user)=>{
            if((user.id).toString() !== id.toString()){
                return true
            }
        })

        res.status(201).send("Usuário deletado.")
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})