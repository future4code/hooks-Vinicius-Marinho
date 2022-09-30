import { Product } from './../models/Product';
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase{
    public static TABLE_PRODUCTS = "Labe_Products"

    public async getProducts(){
        const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        return result        
    }

    public async createProduct(product: Product){
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert({
            id: product.getId(),
            name: product.getName(),
            price: product.getPrice()
        })
    }

    public async getProductsById(id:string){
        const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({ id})
        return result
    }
}