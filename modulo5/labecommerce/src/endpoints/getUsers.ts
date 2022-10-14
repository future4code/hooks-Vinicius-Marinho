import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsers = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {
       
      const users = await connection("Labecommerce_users")
      .select()
      
      
      if(users.length < 1){
         errorCode = 404
         throw new Error("Usário não encontrado.")
      }

      const purchases = await connection.raw(`
         SELECT u.name as user_name, pr.name as product_name, pu.quantity, pu.total_price FROM Labecommerce_purchases as pu 
         JOIN Labecommerce_products as pr ON pu.product_id = pr.id
         JOIN Labecommerce_users as u ON pu.user_id = u.id
         WHERE user_id LIKE "${users[0].id}"
      `)

      const purchases1 = await connection.raw(`
         SELECT u.name as user_name, pr.name as product_name, pu.quantity, pu.total_price FROM Labecommerce_purchases as pu 
         JOIN Labecommerce_products as pr ON pu.product_id = pr.id
         JOIN Labecommerce_users as u ON pu.user_id = u.id
         WHERE user_id LIKE "${users[1].id}"
      `)
      
      const show = [{
         id: users[0].id,
         name: users[0].name,
         email: users[0].email,
         purchases: purchases[0]
      },
      {
         id: users[1].id,
         name: users[1].name,
         email: users[1].email,
         purchases: purchases1[0]
      }]

      res.status(200).send(show)

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}
