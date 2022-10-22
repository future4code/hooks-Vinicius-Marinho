import { User } from './../model/User';
import { CustomError, InvalidEmail } from './../error/customError';
import { UserRepository } from './UserRepository';
import { v4 as generateId } from "uuid"
import { UserDatabase } from "../data/mySQL/UserDatabase"
export class UserBusiness{

    constructor(private userDatabase:UserRepository){}
   
    public create = async(input:any)=>{
    try {

        const {name, email, password} = input

        if (!name || !email || !password) {
            throw new CustomError(400,"Necessário fornecer name, email e password")
        }
        
        if(!email.includes("@")){
            throw new InvalidEmail()
        }

        const id: string = generateId()

        const user: User ={
            id,name,email,password
        }
         
        
        await this.userDatabase.insertUser(user)
    
    } catch (error:any) {
        throw new Error(error.message)
    }
   }
}    