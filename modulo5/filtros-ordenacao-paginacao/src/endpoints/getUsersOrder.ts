import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersOrder = async(req: Request,res: Response): Promise<void> =>{
   let errorCode = 400

   try {

      let paramOrder = req.query.paramOrder as string
      let order = req.query.order as string
           
      if(!paramOrder){
         paramOrder = "email"
      }

      if(paramOrder === "nome"){
         paramOrder = "name"
      }

      if(paramOrder === "tipo"){
         paramOrder = "type"
      }

      if(paramOrder !== "name" &&  paramOrder !== "type" && paramOrder !== "email" && paramOrder !== "id"){
         errorCode = 406
         throw new Error("Forneça parâmetro válido para ordenação.")
      }

      if(!order){
         order = "ASC"
      }
      const users = await connection("aula48_exercicio")
         .orderBy(paramOrder,order)

      if(users.length < 1){
         res.statusCode = 404
         throw new Error("Usuário não encontrado")
      }

     

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.status(errorCode).send(error.message || error.sqlMessage)
   }
}
