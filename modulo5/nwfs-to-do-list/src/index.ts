import express, {Request, Response} from "express";
import cors from "cors";
import {v4 as generateId} from "uuid";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/user/all", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    

    const user = await connection.raw(`
      SELECT id,nickname FROM TodoListUser
      
    `)

    res.status(200).send(user[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/user/:id", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const id = req.params.id

    const user = await connection.raw(`
      SELECT id,nickname FROM TodoListUser
      WHERE id = "${id}"
    `)

      if(user[0].length === 0){
        errorCode = 404
        throw new Error("Usuário não encontrado.")
      }

    res.status(200).send(user[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/task", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const id = req.query.creator_user_id

    if(!id){
      errorCode = 406
      throw new Error("Digite o id de um usuário.")
    }
    
   const task = await connection.raw(`
        SELECT 
        t.id,
        t.title,
        t.description,
        t.limit_date,
        t.status,
        t.creator_user_id,
        u.nickname as creator_user_nickname
        FROM TodoListUser as u JOIN TodoListTask as t ON t.creator_user_id = u.id
        WHERE t.creator_user_id = "${id}"
    `)

    res.status(200).send(task[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/task/:id", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const id = req.params.id

     
    const task = await connection.raw(`
    SELECT 
    t.id,
    t.title,
    t.description,
    t.limit_date,
    t.status,
    t.creator_user_id,
    u.nickname as creator_user_nickname
    FROM TodoListUser as u JOIN TodoListTask as t ON t.creator_user_id = u.id
    WHERE t.id = "${id}"   
    `)
    
    if(task[0].length === 0){
      errorCode = 404
      throw new Error("Tarefa não encontrada.")
    }
    
    res.status(200).send(task[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/user", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const search = req.query.search

    if(!search){
      errorCode = 406
      throw new Error("Digite uma palavra para buscar.");
      
    }

    const user = await connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE nickname LIKE "%${search}%" OR email LIKE "%${search}%"
      
    `)
    
    
    res.status(200).send(user[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/user", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const {name, nickname, email} = req.body

    if(!name){
      errorCode = 406
      throw new Error("Digite o nome.")
    }

    if(!nickname){
      errorCode = 406
      throw new Error("Digite o nickname.")
    }

    if(!email){
      errorCode = 406
      throw new Error("Digite o email.")
    }

    const newUser = {
      id: generateId(),
      name,
      nickname,
      email
    }

    await connection.raw(`
      INSERT INTO TodoListUser (id, name, nickname, email)
      VALUES("${newUser.id}","${newUser.name}","${newUser.nickname}","${newUser.email}")
    `)

    res.status(200).send("Usuário criado com sucesso.")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/task", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const {title, description, limit_date, creator_user_id} = req.body

    if(!title){
      errorCode = 406
      throw new Error("Digite o titulo da tarefa")
    }
    if(!description){
      errorCode = 406
      throw new Error("Digite a descrição da tarefa")
    }if(!limit_date){
      errorCode = 406
      throw new Error("Digite a data limite da tarefa")
    }if(!creator_user_id){
      errorCode = 406
      throw new Error("Digite o ID do criador da tarefa")
    }
    
    const FormataStringData = (data: string): Date => {
      let day = data.split("/")[0];
      let month = data.split("/")[1];
      let year = data.split("/")[2];
      return new Date (Number(year), Number(month)-1, Number(day));
    };


    const newDate = FormataStringData(limit_date)
    
    const newTask = {
      id: generateId(),
      title,
      description,
      limit_date: newDate.toISOString().split('T')[0],
      creator_user_id
    }

    await connection.raw(`
      INSERT INTO TodoListTask (id, title, description, limit_date,creator_user_id)
      VALUES("${newTask.id}","${newTask.title}","${newTask.description}","${newTask.limit_date}","${newTask.creator_user_id}")
    `)

    res.status(200).send("Tarefa criada com sucesso.")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

app.post("/task/responsible", async (req: Request, res:Response)=>{
  let errorCode = 400
  try {

    const { task_id, responsible_user_id} = req.body

    if(!task_id){
      errorCode = 406
      throw new Error("Digite o id da tarefa.")
    }

    if(!responsible_user_id){
      errorCode = 406
      throw new Error("Digite o id do responsável pela tarefa.")
    }

    const responsibleTask = {
      id: generateId(),
      task_id,
      responsible_user_id
    }

    await connection.raw(`
    INSERT INTO TodoListResponsibleUserTaskRelation (id, task_id, responsible_user_id)
    VALUES("${responsibleTask.id}","${responsibleTask.task_id}","${responsibleTask.responsible_user_id}")
    `)
    
    res.status(200).send("Tarefa atribuida ao usuário.")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/user/edit/:id", async (req: Request , res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const {name,nickname} = req.body
    
    if (!name) {
      throw new Error("Digite o novo nome")
    }

    if (!nickname) {
      throw new Error("Digite o novo nickname")
    }
    
   const Users = await connection.raw(`
       SELECT * FROM TodoListUser
       WHERE id = "${id}";
    `)

    if (Users[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    await connection.raw(`
    UPDATE TodoListUser
    SET name = "${name}"
    WHERE id = "${id}";
    `)

    await connection.raw(`
    UPDATE TodoListUser
    SET nickname = "${nickname}"
    WHERE id = "${id}";
    `)

    res.status(200).send("nome e nickname alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})



app.get("/task/:id/responsible", async (req: Request, res: Response)=>{
  const id = req.params.id 

  

})




app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});