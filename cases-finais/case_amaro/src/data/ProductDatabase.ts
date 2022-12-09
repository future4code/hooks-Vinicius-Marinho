import { product, FindProductByNameInputDTO } from './../model/products';
import { CustomError } from "../error/customError";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  
  public insertProduct = async (product: product) => {
    try {
      console.log(product)
      await ProductDatabase.connection("Products_amaro")
        .insert({
          id: product.id,
          name: product.name,
          tags: product.stringTags,
        })
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findProducts = async (search: string) => {
    try {
      const result = await ProductDatabase.connection.raw(`
      SELECT id, nickname FROM TodoListUser
      WHERE id LIKE "%${search}%" OR name LIKE "%${search}%" OR tags LIKE "%${search}%"
    `)

      
      return result;
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
