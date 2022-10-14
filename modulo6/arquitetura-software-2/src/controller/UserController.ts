import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async get(req:Request, res:Response){
    try {
      const name = req.body.name

      const userBusiness = new UserBusiness()
      const result = await userBusiness.get(name)

      res.status(200).send({Users: result})
    } catch (error:any) {
      res.status(400).send(error.message)
    }
  }
}
