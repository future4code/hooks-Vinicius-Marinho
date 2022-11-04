import { CustomError } from "../error/customError";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection("Auth_users")
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        });
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
        .select()
        .where({email})

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
        .select()
        .where({id})
      
      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
