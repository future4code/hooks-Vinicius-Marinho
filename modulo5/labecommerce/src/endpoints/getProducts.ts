import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getProducts = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {
      
      const order = req.query.order as string
      const search = req.query.search as string

      if(!order && !search){
         const products = await connection("Labecommerce_products")
         .select()
         
         if(products.length < 1){
            errorCode = 404
            throw new Error("Produto não encontrado.")
         }

         res.status(200).send(products)
      }

      if(order && !search){
         const products = await connection("Labecommerce_products")
         .select()
         .orderBy("name",order)

         if(products.length < 1){
            errorCode = 404
            throw new Error("Produto não encontrado.")
         }

         res.status(200).send(products)

      }

      if(!order && search){
         const products = await connection("Labecommerce_products")
         .select()
         .where("name","like",`%${search}%`)     

         if(products.length < 1){
            errorCode = 404
            throw new Error("Produto não encontrado.")
         }

         res.status(200).send(products)
      }

      if(order && search){
         const products = await connection("Labecommerce_products")
         .select()
         .where("name","like",`%${search}%`)
         .orderBy("name",order)
         

         if(products.length < 1){
            errorCode = 404
            throw new Error("Produto não encontrado.")
         }

         res.status(200).send(products)
      }
      

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}
