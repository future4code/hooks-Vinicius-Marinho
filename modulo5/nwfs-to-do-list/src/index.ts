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

app.get("/user/:id", async (req: Request , res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    if(!id){
      errorCode = 406
      throw new Error("Digite o id")
    }

    const user = await connection.raw(`
    SELECT id , nickname FROM TodoListUser
    WHERE id = "${id}"
   `)

   if(user[0].length === 0){
    errorCode = 406
    throw new Error("Usuario não encontrado")
  }

    res.status(200).send(user[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
});

app.get("/task/status", async (req:Request, res:Response)=>{
  let errorCode = 400

  try {
    const status = req.query.status

    if(!status){
      errorCode = 406
      throw new Error("Digite o id de um usuário.")
    }


    const task = await connection.raw(`
      SELECT 
      t.id as task_id,
      t.title,
      t.description,
      t.limit_date,
      t.creator_user_id,
      u.nickname as creator_user_nickname
      FROM TodoListUser as u JOIN TodoListTask as t ON t.creator_user_id = u.id
      WHERE t.status = "${status}"
    `)

    res.status(200).send(task[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})
  

app.get("/task/id", async (req: Request, res: Response)=>{
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

app.get("/task/:id", async (req: Request , res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    const task = await connection.raw(`
      
      SELECT
        t.id as taskId,
        t.title,
        t.description,
        t.limit_date,
        t.creator_user_id,
        u.nickname as creator_user_nickname
      FROM TodoListTask as t
      JOIN TodoListUser as u ON t.creator_user_id = u.id
      WHERE t.id = "${id}"   

    `)
   
    
    const result = {...task[0][0]}
    
   if(!result){
    errorCode = 406
    throw new Error("tarefa não encontrado")
  }
  
  const responsibleUser = await connection.raw(`
  SELECT u.id, u.nickname FROM TodoListResponsibleUserTaskRelation as r
  JOIN TodoListTask as t ON r.task_id = t.id
  JOIN TodoListUser as u ON r.responsible_user_id = u.id
  WHERE task_id = "${id}"
 `)

  const show = {
    "taskId":result.taskId,
    "title": result.title,
    "description":result.description,
    "limitDate": result.limit_date.toLocaleDateString('pt-BR'),
    "creatorUserId": result.creator_user_id,
    "creatorUserNickname": result.creator_user_nickname,
    "responsibleUsers":responsibleUser[0]
  }

  res.status(200).send(show)

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
});

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

app.get("/task/:id/responsible", async (req: Request , res: Response) => {
  let errorCode = 400
  try {
    const id= req.params.id

    if(!id){
      errorCode = 406
      throw new Error("Digite o id da tarefa.")
    }

    const task = await connection.raw(`
      SELECT u.id, u.nickname FROM TodoListResponsibleUserTaskRelation as r
      JOIN TodoListTask as t ON r.task_id = t.id
      JOIN TodoListUser as u ON r.responsible_user_id = u.id
      WHERE task_id = "${id}"
     `)

   if(task[0].length === 0){
    errorCode = 406
    throw new Error("tarefa não encontrado")
  }

    res.status(200).send(task[0])

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
});

app.post("/user", async (req: Request , res: Response) => {
  let errorCode = 400

  try {
      const {name , nickName , email} = req.body

      if(!name){
          errorCode = 406
          throw new Error("Insira o nome do usuário")
      }

      if(!nickName){
          errorCode = 406
          throw new Error("Insira o nickname do usuário")
      }

      if(!email){
          errorCode = 406
          throw new Error("Insira o email do usuário")
      }


      let newUser = {
          id: generateId(),
          name,
          nickName,
          email
      }


      await connection.raw(`
      INSERT INTO TodoListUser(id , name , nickName , email)
      VALUES("${newUser.id}" , "${newUser.name}" , "${newUser.nickName}" , "${newUser.email}")
      `)

      res.status(200).send("Usuário criado com sucesso!")


  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
})

app.post("/task", async (req: Request , res: Response) => {
  let errorCode = 400

  try {
      const {title , description , limit_date , creator_user_id} = req.body

      if(!title){
          errorCode = 406
          throw new Error("Insira o title da tarefa")
      }

      if(!description){
          errorCode = 406
          throw new Error("Insira a description da tarefa")
      }

      if(!limit_date){
          errorCode = 406
          throw new Error("Insira o limit_date da tarefa")
      }

      if(!creator_user_id){
        errorCode = 406
        throw new Error("Insira o creator_user_id da tarefa")
    }

      const FormataStringData = (data: string): Date => {
        let day = data.split("/")[0];
        let month = data.split("/")[1];
        let year = data.split("/")[2];
        return new Date (Number(year), Number(month)-1, Number(day));
      };


      const newDate = FormataStringData(limit_date)

      
      let novaTarefa = {
        id: generateId(),
        title,
        description,
        limit_date: newDate.toISOString().split('T')[0],
        creator_user_id
    }

      await connection.raw(`
      INSERT INTO TodoListTask(id , title , description , limit_date , creator_user_id)
      VALUES("${novaTarefa.id}" , "${novaTarefa.title}" , "${novaTarefa.description}" , "${novaTarefa.limit_date}", "${novaTarefa.creator_user_id}")
      `);

      res.status(200).send("Tarefa criada com sucesso!")


  } catch (error: any) {
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
    const name = req.body.name
    const nickname = req.body.nickname

    if (!name) {
      throw new Error("É necessário passar o novo nome")
    }

    if (!nickname) {
      throw new Error("É necessário passar o novo nickname")
    }

    const user = await connection.raw(`
       SELECT * FROM TodoListUser
       WHERE id = "${id}";
    `)

    if (user[0].length === 0) {
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

app.put("/task/status/:id/", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    
    const id = req.params.id
    const status = req.body.status

    if(!status){
      errorCode = 406
      throw new Error("Digite o novo status")
    }

    const task = await connection.raw(`
      SELECT * FROM TodoListTask
      WHERE id = "${id}";
    `)
    
    if (task[0].length === 0) {
      throw new Error("Tarefa não encontrada")
    }

    await connection.raw(`
      UPDATE TodoListTask
      SET status = "${status}"
      WHERE id = "${id}";
    `)
    res.status(200).send("Status atualizado.")
  } catch (error) {
      res.status(errorCode).send(error.message)
  }
})














app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});