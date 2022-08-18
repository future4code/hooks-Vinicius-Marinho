import express,{Response, Request} from "express"
import cors from "cors"
import {listTodo} from "./data"
import { v4 as generateId } from 'uuid';

const app = express()

app.use(express.json())
app.use(cors())


app.get("/ping", ( req: Request,res:Response)=>{
    res.send("Pong.") 
})

app.get("/toDo", (req:Request, res: Response)=>{
    const toDoStatus = req.query.completed
   
    let listToDoStatus

    if(toDoStatus === "sim"){
        listToDoStatus = listTodo.filter((toDo)=>toDo.completed === true)

    } else if( toDoStatus === "não"){
        listToDoStatus= listTodo.filter((toDo)=>toDo.completed === false)
    } else{
        listToDoStatus = "Tarefa completa? sim ou não"
    }

    res.send(listToDoStatus)
})

app.post("/toDo/Create/:userId" , (req: Request , res: Response) => {
    try {
        const userId = Number(req.params.userId)
     
        const title  = (req.body.title as string)
        const completed = req.body.completed

        let booleanCompleted: boolean

        if(completed === "sim"){
        booleanCompleted = true

        } else ( completed === "não")
            booleanCompleted= false
        


        const toDoAtualizado = {
            userId: userId,
            id: generateId(),
            title: title,
            completed: booleanCompleted
        }
        listTodo.push(toDoAtualizado)

        res.send(listTodo)

        
    } catch (error:any) {
        res.send(error.message)
    }
})

app.get("/toDo/edit/:title",(req: Request, res: Response)=>{
    
    const editToDo = req.params.title
    const toDo = listTodo.find(toDo => toDo.title === editToDo)

    if (!toDo) throw new Error("Tarefa não encontrada")

    if(toDo.completed === true){
        toDo.completed = false
    } else {
        toDo.completed = true
    }
    
    res.send(toDo)
})

app.delete("/toDo/del/:id",(req: Request, res: Response)=>{
    const toDoId = Number(req.params.id)

    const listToDos = listTodo.map((toDo)=>{
      if(toDo.id === toDoId){
        return{}
      }
      return toDo
    })
    res.send(listToDos)

})

app.get("/toDo/search/:userId", (req: Request, res: Response)=>{
    try {
        const userId = Number(req.params.userId)

        const selectedUser = listTodo.filter((toDo)=>toDo.userId === userId) 
        
        const others =listTodo.filter((toDo)=>toDo.userId !== userId) 

        const todos = {}

        const listTodosAll = {todos :{selectedUser,others}}

        res.send(listTodosAll)

    } 
    catch (error:any) {
        res.send(error.mensage)
    }
    
})

    
      
   
      
   

app.listen(3003, ()=> console.log("O servidor está online na porta 3003."))