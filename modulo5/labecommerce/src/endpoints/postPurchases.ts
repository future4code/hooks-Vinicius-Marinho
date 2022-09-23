import { Purchases } from './../types';
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as generateId } from "uuid"

export const postPurchases = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {
      const user_id = req.body.user_id as string
      const product_id  = req.body.product_id as string
      const quantity = Number(req.body.quantity)

      if(!user_id){
         errorCode = 406
         throw new Error("Digite o id do usuário.")
      }
      if(!product_id){
         errorCode = 406
         throw new Error("Digite o id do produto.")
      }
      if(!quantity){
         errorCode = 406
         throw new Error("Digite a quantidade de produtos comprados.")
      }

      const price_prodcuts = await connection("Labecommerce_products")
      .select("price")
      .where("id" ,"LIKE", `${product_id}`)
      
      const newPurchases:Purchases = {
         id: generateId(),
         user_id,
         product_id,
         quantity,
         total_price: quantity * Number(price_prodcuts[0].price)
      }
      
      await connection.raw(`
      INSERT INTO Labecommerce_purchases (id,user_id,product_id,quantity,total_price)
      VALUES("${newPurchases.id}","${newPurchases.user_id}","${newPurchases.product_id}","${newPurchases.quantity}","${newPurchases.total_price}")
      `)
      
      res.status(200).send("Compra realizada.")

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}
