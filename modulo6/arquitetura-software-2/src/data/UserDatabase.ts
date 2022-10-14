import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection(UserDatabase.TABLE_NAME)
      .insert({
        id,
        name,
        email,
        password,
      })
  }

 async get(name:string){
  const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
  .select()
  .where("name","like",`%${name}%`)
 
  return result

  }
}
