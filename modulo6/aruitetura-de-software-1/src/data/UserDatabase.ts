import { User } from '../types/user';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase{
    public insertUser = async(user:User)=>{
        try {
            await UserDatabase.connection('User_Arq')
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })

        } catch (error) {
            
        }
    }

    public getAllUser = async()=>{
        try {
           
            const result = await UserDatabase.connection("User_Arq")
            .select()
            
            return result

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public deleteUser = async(id: string)=>{
        try {
            
            await UserDatabase.connection("User_Arq")
            .delete()
            .where({id})
            
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}