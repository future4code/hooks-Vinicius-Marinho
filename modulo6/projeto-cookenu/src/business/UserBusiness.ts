import { GetOtherProfileInputDTO, FollowUserInputDTO } from './../model/user';
import { Authenticator } from './../services/Authenticator';
import { UserDatabase } from "../data/UserDatabase";
import {CustomError,InvalidEmail,InvalidName,InvalidPassword,Unauthorized,UserNotFound} from "../error/customError";
import {UserInputDTO,user,LoginInputDTO,UserRoles,GetMyProfileInputDTO} from "../model/user";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const hashManager = new HashManager();
const userDatabase = new UserDatabase();
const authenticator = new Authenticator()

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password, role } = input;

      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","email" e "password"'
        );
      }

      if (role !== "ADMIN" && role !== "NORMAL") {
        throw new CustomError(400, 'Preencha os campos "role" corretamente');
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const hashPassword: string = await hashManager.hash(password);

      const user: user = {
        id,
        name,
        email,
        password: hashPassword,
        role: UserRoles[role],
      };

      await userDatabase.insertUser(user);
      
      const token = tokenGenerator.generateToken(id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUserByEmail(email);

      if (!user) {
        throw new UserNotFound();
      }

      const isValidPassword: boolean = await hashManager.compare(
        password,
        user.password
      );

      if (!isValidPassword) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken(user.id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getMyUserProfile = async (input: GetMyProfileInputDTO) => {
    try {
      const { token } = input;

      const {id} = authenticator.getTokenData(token)

      const userDatabase = new UserDatabase();
      const profile = await userDatabase.findUserById(id);

      return profile

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getOtherUserProfile = async (input: GetOtherProfileInputDTO) => {
    try {
      const { token,id } = input;

      if(!token || token.length < 1){
        throw new Unauthorized
      }

      const userDatabase = new UserDatabase();
      const profile = await userDatabase.findUserById(id);

      return profile

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

}
