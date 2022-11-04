import { LoginInputDTO, GetProfileInputDTO,UserInputDTO,user} from './../model/user';
import { Authenticator } from './../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { InvalidPassword, UserNotFound } from './../error/customError';
import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail,  } from "../error/customError";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {

  public signup = async (input: UserInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if(password.length < 6){
        throw new InvalidPassword()
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        email,
        password,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})
      
      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if(!user) {
        throw new UserNotFound()
      }

      if(user.password !== password) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({id: user.id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserProfile = async (input: GetProfileInputDTO) => {
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
}
