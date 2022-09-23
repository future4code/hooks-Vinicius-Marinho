import { Products } from './../types';
import { User } from '../types';
import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as generateId } from "uuid"

export const postProducts = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {
      const name = req.body.name as string
      const price = Number(req.body.price)
      const image_url = req.body.image_url as string

      if(!name){
         errorCode = 406
         throw new Error("Digite o nome do produto.")
      }
      if(!price){
         errorCode = 406
         throw new Error("Digite o preço do produto.")
      }
      if(!image_url){
         errorCode = 406
         throw new Error("Digite uma url de imagem do produto.")
      }

      const newProducts: Products = {
         id: generateId(),
         name,
         price,
         image_url
      }
      
      await connection.raw(`
      INSERT INTO Labecommerce_products (id,name,price,image_url)
      VALUES("${newProducts.id}","${newProducts.name}","${newProducts.price}","${newProducts.image_url}")
      `)
      
      res.status(200).send("Produto cadastrado com sucesso.")

   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
}
