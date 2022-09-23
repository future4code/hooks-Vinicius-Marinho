import { Purchases } from './../types';
import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getPurchasesUsers = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {
      const user_id = req.params.user_id
           
      const purchase = await connection.raw(`
         SELECT u.name as user_name, pr.name as product_name, pu.quantity, pu.total_price FROM Labecommerce_purchases as pu 
         JOIN Labecommerce_products as pr ON pu.product_id = pr.id
         JOIN Labecommerce_users as u ON pu.user_id = u.id
         WHERE user_id LIKE "${user_id}"
      `)

      if(purchase.length < 1){
         errorCode = 404
         throw new Error("Compra não encontrada.")
      }

      res.status(200).send(purchase[0])

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}
