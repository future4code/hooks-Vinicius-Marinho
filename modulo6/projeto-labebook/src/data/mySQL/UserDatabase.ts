import { User } from '../../model/User';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase{
    private userTable = "labook_users"

    public insertUser = async (user:User)=>{
        try {
           
            await UserDatabase.connection(this.userTable)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })

        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}