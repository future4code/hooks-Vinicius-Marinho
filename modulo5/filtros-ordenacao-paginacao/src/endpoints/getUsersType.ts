import { Request, Response } from "express"
import { connection } from "../data/connection"


export async function getUsersType( req: Request, res: Response): Promise<void> {
  let errorCode = 400

   try {
      let type = req.params.type as string

      
      const users = await connection("aula48_exercicio")
      .where("type","like",`${type}`)
      
      if(users.length < 1){
         errorCode = 404
         throw new Error("Nenhum usuário encontrado.")
      }

      res.status(200).send(users)

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}

