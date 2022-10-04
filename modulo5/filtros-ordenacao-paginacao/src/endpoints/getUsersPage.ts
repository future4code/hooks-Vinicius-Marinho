import { Request, Response } from "express"
import { connection } from "../data/connection"


export async function getUsersPage( req: Request, res: Response): Promise<void> {
  let errorCode = 400

   try {
      let size = 5
      let page = Number(req.query.page)
      
      if(isNaN(page) || page < 1){
         page = 1
      }

      let offset = size * (page -1)

      const users = await connection("aula48_exercicio")
      .limit(size)
      .offset(offset)
      
      if(users.length < 1){
         errorCode = 404
         throw new Error("Nenhum usuário encontrado.")
      }

      res.status(200).send(users)

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}

