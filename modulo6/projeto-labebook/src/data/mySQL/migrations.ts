import { BaseDatabase } from './BaseDatabase';

export class MigrationDatabase extends BaseDatabase{

    public createTable = async ()=>{
        try {
        await MigrationDatabase.connection.raw(`
            CREATE TABLE labook_users(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );

            CREATE TABLE labook_posts(
                id VARCHAR(255) PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                type ENUM("normal","event") DEFAULT "normal",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                author_id VARCHAR(255),
                FOREIGN KEY (author_id) REFERENCES labook_users (id)
                )
        `)
        console.log("teste")
        } catch (error:any) {
            console.log("Erro ao criar tabela Produtos.")
            console.log(error.sqlMessage)

        }
        
        
    }
    
}

const migrationDatabase = new MigrationDatabase()
migrationDatabase.createTable()