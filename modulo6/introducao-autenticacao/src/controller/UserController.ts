import { LoginInputDTO, GetProfileInputDTO, UserInputDTO } from './../model/user';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
              
          res.status(201).send({  token });

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
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(200).send({ token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public getProfile = async (req: Request, res: Response) => {
        try {
          
          const input: GetProfileInputDTO = {
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          const profile = await userBusiness.getUserProfile(input);
          
          res.status(201).send({id: profile.id, email: profile.email});

        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

}
