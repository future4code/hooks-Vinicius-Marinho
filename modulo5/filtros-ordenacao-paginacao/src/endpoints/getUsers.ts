import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
   let errorCode = 400

   try {
      let title = req.query.title
      let sort = req.query.sort
      let paramOrder = req.query.paramOrder as string
      let order = req.query.order as string
      let page = Number(req.query.page)
      let size = 5
      
      if(!sort){
         sort = "name"
      }

      if(!title){
         title = "%"
      }

      if(!paramOrder){
         paramOrder = "name"
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
         order = "DESC"
      }

      if(!page){
         page = 1
      }

      let offset = size*(page-1)

      const users = await connection("aula48_exercicio")
      .where(`${sort}`,"like",`${title}`)   
      .orderBy(paramOrder,order)
      .limit(size)
      .offset(offset)

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
