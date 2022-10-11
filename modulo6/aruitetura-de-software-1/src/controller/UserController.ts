import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

export class  UserController{
    public createUser = async (req:Request, res: Response)=>{
        try {
            const {name,email,password} = req.body

            const input = {name,email,password}

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send({message:"Usuário criado!"})
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public getAllUsers = async(req:Request, res:Response)=>{
        try {
            const userBusiness = new UserBusiness()

            const users = await userBusiness.getAllUsers()

            res.status(200).send(users)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public deleteUser = async(req:Request,res:Response)=>{
        try {
            const id = req.params.id 

            const input = id

            const userBusiness = new UserBusiness()

            await userBusiness.deleteUser(input)

            res.status(200).send({message:"Usuário deletado com sucesso."})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
        


    }

}