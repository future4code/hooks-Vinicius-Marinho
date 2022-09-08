import { Funcionario } from './types';
import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { v4 as generateId} from "uuid";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/funcionarios", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const search = req.query.search

    if(search){
      const resultado = await connection("Funcionários")
      .select()
      .where ({name: search })

      res.status(200).send(resultado)
    }

    const resultado = await connection("Funcionários")
    .select()

    res.status(200).send(resultado)
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/funcionarios", async (req: Request, res: Response)=>{
  let errorCode = 400
  try {
    const {name,email} = req.body

    if(!name){
      errorCode = 406
      throw new Error ("Digite o nome do funcionário.")
    }

    if(!email){
      errorCode = 406
      throw new Error ("Digite o email do funcionário.")
    }

    if(!email.includes("@")){
      throw new Error("coloque o @ no email")
    }

   if(name.length < 4){
      errorCode = 406
      throw new Error ("O nome deve ter pelo menos 4 caracteres.")
   }

   const novoFuncionario: Funcionario = {
    id: generateId(),
    name: name,
    email: email
   }

  
    await connection.raw(`
        INSERT INTO Funcionários (id ,name , email)
        VALUES("${novoFuncionario.id}" , "${novoFuncionario.name}" , "${novoFuncionario.email}")
    `)

    res.status(200).send("Usuario criado com sucesso!")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email

    const funcionários = await connection.raw(`
      SELECT * FROM Funcionários
      WHERE id = "${id}";
    `)

    if (funcionários[0].length === 0) {
      throw new Error("Funcionário não encontrado")
    }

    if (!email) {
      throw new Error("É necessário passar o novo email")
    }

    if(!email.includes("@")){
      throw new Error("coloque o @ no email")
    }

    await connection.raw(`
    UPDATE Funcionários
    SET email = "${email}"
    WHERE id = "${id}";
  `)

    res.status(200).send("Email alterado")

  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})

app.delete("/funcionarios/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    const funcionários = await connection.raw(`
      SELECT * FROM Funcionários
      WHERE id = "${id}";
    `)

    if (funcionários[0].length === 0) {
      throw new Error("Produto não encontrado")
    }

    await connection.raw(`
      DELETE FROM Funcionários
      WHERE id = "${id}";
    `)

    res.status(200).send("Produto deletado")
    
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});