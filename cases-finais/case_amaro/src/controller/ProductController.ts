import { ProductBusiness } from './../business/ProductBusiness';
import { ProductInputDTO, FindProductByNameInputDTO } from './../model/products';
import { Request, Response } from "express";

export class ProductController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, tags,id} = req.body;

      const input: ProductInputDTO = {
        id,
        name,
        tags,
      };

      const productBusiness = new ProductBusiness()
      const token = await productBusiness.createProduct(input)
      
      res.status(201).send({ message: "Produto criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public findProductByName = async (req: Request, res: Response) => {
    try {
      const search = req.body.search as string

      const input: FindProductByNameInputDTO ={
        search
      }

      res.status(201).send(input)
    } catch (error:any) {
      res.status(400).send(error.message);
    }
    

  }
}
