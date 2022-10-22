import { UserInputDTO } from './../model/User';
import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express"

export class UserController{
   constructor(private userBusiness: UserBusiness){}

   public create = async (req: Request, res: Response) => {
      let errorCode =400
      try {
         
         const { name, email, password } = req.body
            
         const input:UserInputDTO = { name, email, password }

         await this.userBusiness.create(input)
         
         res.status(201).send({ message: "Usuário criado!" })
     
      } catch (error:any) {
         res.status(errorCode).send
      }
   }
}