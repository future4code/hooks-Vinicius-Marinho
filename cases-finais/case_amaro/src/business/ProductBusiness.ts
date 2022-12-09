import { product, ProductInputDTO, FindProductByNameInputDTO } from './../model/products';
import { ProductDatabase } from './../data/ProductDatabase';
import {CustomError,InvalidName,ProductNotFound,} from "../error/customError";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

const idGenerator = new IdGenerator();
const tokenGenerator = new TokenGenerator();
const productDatabase = new ProductDatabase();

export class ProductBusiness {
  public createProduct = async (input: ProductInputDTO): Promise<string> => {
    try {
      let {id} = input;
      const { name, tags} = input;

      if (!name || !tags) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "tags"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if(!id){
        id = idGenerator.generateId();
      }
       const stringTags = tags.toString()

      const product: product = {
        id,
        name,
        stringTags,
      };

      await productDatabase.insertProduct(product);

      const token = tokenGenerator.generateToken(id);

      return token;

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findProduct = async(input: FindProductByNameInputDTO )=>{
    const {search} = input ;

    if (!search) {
      throw new Error("Digite, um parametro para busca");
    }
    console.log(input)
    await productDatabase.findProducts(search)
  }
}
