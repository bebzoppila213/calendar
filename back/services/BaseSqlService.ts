import mysql, { Connection } from "mysql2/promise"

export default class BaseSqlService{
    private connection: Connection;


    private async connect(){
        this.connection = await mysql.createConnection({
            host: process.env.HOST, 
            user: process.env.USER, 
            password: process.env.PASSWORD, 
            database: process.env.DATABASE,
            timezone: "utc"
        });
    }

    private disconnect(){
        this.connection.destroy()
    }

    protected async sendQuery(sql: string, params: Array<string | number>){
        await this.connect()
        const [rows, fields] = await this.connection.execute(sql, params)
        this.disconnect()
        return rows
    }
}