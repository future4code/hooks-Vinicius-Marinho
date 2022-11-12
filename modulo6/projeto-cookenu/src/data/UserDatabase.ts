import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ email });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ id })

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection("Cookenu_users")
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        })
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

}
