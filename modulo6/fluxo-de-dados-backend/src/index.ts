import express,{Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { arrayProdutos } from "./data";
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors())

app.get("/test",(req: Request, res: Response)=>{
    res.status(200).send("Teste API ok!")
})

app.post("/product/create",(req: Request, res: Response)=>{
    
    const {name, price} = req.body
   
    try {
        
        if(!name || !price){
            res.status(422).send("Nome ou preço não informado.")
        }

        if(typeof(name) !== "string"){
            res.status(422).send("O nome foi escrito de forma invalida")
        }
        
        if(typeof(price) !== "number"){
            res.status(422).send("O preço foi escrito de forma invalida")
        }

        if(price <= 0){
            res.status(422).send("O número deve ser maior que zero")
        }

        const newProduct = {
            id: generateId(),
            name,
            price
        }

        arrayProdutos.push(newProduct)

        res.status(201).send(arrayProdutos)
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
    

})

app.get("/products",(req: Request, res: Response)=>{
    const searchProduct = req.query.name

    try {

        if(!searchProduct || searchProduct === ""){
            res.status(200).send(arrayProdutos)  
        }

        const newArrayProducts = arrayProdutos.filter((product)=>{
            return product.name === searchProduct
        })
        
        if(newArrayProducts === []){
            res.status(422).send("Produto não encontrado")   
        }
            res.status(201).send(newArrayProducts) 
        
    } catch (error:any) {
        res.status(500).send(error.message)        
    }
      

})

app.put("/product/edit/:id",(req: Request, res: Response)=>{
    
    const editProduct = req.params.id

    try {
        let product = arrayProdutos.find(product => product.id === editProduct)

    
    if (!product) throw new Error("Produto não encontrado")
    
    if(typeof(product.price) !== "number"){
        res.status(422).send("O preço foi escrito de forma invalida")
    }

    if(product.price <= 0){
        res.status(422).send("O número deve ser maior que zero")
    }
    
    const newPrice = req.body.price
    const newName = req.body.name


    if(!newPrice && ! newName){ res.status(422).send("Novo preço e nome do produto não informado")}

    if(newPrice && newName){
        product.price = newPrice
        product.name = newName
    } 
    
    if(newPrice && ! newName){
        product.price = newPrice
    }

    if(!newPrice && newName){
        product.name = newName
    }
    
    
    res.status(201).send(arrayProdutos)
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
    
})

app.delete("/product/del/:id",(req: Request, res: Response)=>{
    const productId = req.params.id

    const product = arrayProdutos.find((product) => product.id === productId)

    try {
        if (!product) {
            res.status(404).send("Produto não encontrado")
        }
    
    
        if (!productId) {
            res.status(400).send("Id obrigatório")
        }
    
            
        const filteredProducts = arrayProdutos.filter((product) => {
            if (product.id !== productId) {
                return true
            }
        })
    
        res.status(201).send(filteredProducts)
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
   
})












const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;