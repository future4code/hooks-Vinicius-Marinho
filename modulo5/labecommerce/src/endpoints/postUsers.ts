import { User } from '../types';
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as generateId } from "uuid"

export const postUsers = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {
      const name = req.body.name as string
      const email = req.body.email as string
      const password = req.body.password as string

      if(!name){
         errorCode = 406
         throw new Error("Digite o nome do usuário")
      }
      if(!email){
         errorCode = 406
         throw new Error("Digite o email do usuário")
      }
      if(!password){
         errorCode = 406
         throw new Error("Digite uma senha usuário")
      }

      const newUser = {
         id: generateId(),
         name,
         email,
         password
      }
      
      await connection.raw(`
      INSERT INTO Labecommerce_users (id,name,email,password)
      VALUES("${newUser.id}","${newUser.name}","${newUser.email}","${newUser.password}")
      `)
      
      res.status(200).send("Usuário cadastrado com sucesso.")

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}
