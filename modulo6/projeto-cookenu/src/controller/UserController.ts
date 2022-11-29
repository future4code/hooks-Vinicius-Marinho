import { GetOtherProfileInputDTO, GetMyProfileInputDTO, FollowUserInputDTO } from './../model/user';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      let { name, email, password, role } = req.body;
      role = role.toUpperCase()
      const input: UserInputDTO = {
        name,
        email,
        password,
        role,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.createUser(input);
      
      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness();
      const token = await userBusiness.login(input);

      res.status(200).send({ message: "Usuário logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getMyProfile = async (req: Request, res: Response) => {
    try {
      
      const input: GetMyProfileInputDTO = {
        token: req.headers.authorization as string
      };

      const userBusiness = new UserBusiness()
      const profile = await userBusiness.getMyUserProfile(input);
      
      res.status(201).send({id: profile.id,name: profile.name, email: profile.email});

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }; 

  public getOtherProfile = async (req: Request, res: Response) => {
    try {

      const id = req.params.id
      
      const input: GetOtherProfileInputDTO = {
        id,
        token: req.headers.authorization as string
      };

      const userBusiness = new UserBusiness()
      const profile = await userBusiness.getOtherUserProfile(input);
      
      res.status(201).send({id: profile.id,name: profile.name, email: profile.email});

    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }; 

}
