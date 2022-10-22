import { UserDatabase } from './../data/UserDatabase';
import { v4 as generateId } from "uuid"

export class UserBusiness {
    public createUser = async(input: any)=>{
        try {
            
            const {name,email,password} = input

            if(!name){
                throw new Error("Digite o nome do usuario.")
            }

            if(!email){
                throw new Error("Digite o email do usuario.")
            }

            if(!password){
                throw new Error("Digite a senha do usuario.")
            }

            const id: string = generateId()

            const userDatabase = new UserDatabase()

            await userDatabase.insertUser({id,name,email,password})
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getAllUsers = async()=>{
        try {
            const userDatabase = new UserDatabase()

            const result = await userDatabase.getAllUser()

            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public deleteUser = async(input: string)=>{
        try {
            const id = input

            if(!id){
                throw new Error("Digite o id do usuário a ser excluido.")
            }
            
            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(id)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}