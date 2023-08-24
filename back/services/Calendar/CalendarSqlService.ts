import BaseSqlService from "../BaseSqlService";
import { ICalendarService, IRecord } from "./CalendarServiceInterface";


export default class CalendarSqlService extends BaseSqlService implements ICalendarService{

    public async create(name: string, phone: string, date: string){
        const createResult: any = await this.sendQuery("INSERT INTO `Record` (`name`, `phone`, `date`) VALUES (?, ?, ?)", [name, phone, date])
        return {name, phone, date, id: (createResult.insertId as number)}
    }

    public async get(firstDate: Date, lastDate: Date){
        const records: any = await this.sendQuery("SELECT * FROM `Record` WHERE `Record`.`date` > ? and `Record`.`date` < ?", [firstDate.toJSON(), lastDate.toJSON()])
        return records as IRecord[]
    }

    public async delete(recordId: number){
        await this.sendQuery(`DELETE FROM \`Record\` WHERE \`Record\`.\`id\` = ${recordId}`, [])
        return {id: recordId}
    }

    public async update(recordId: number, name: string, phone: string, date: string){
        await this.sendQuery("UPDATE `Record` SET `name`=?,`phone`=?, `date`=? WHERE `Record`.`id` = ?", [name, phone, date, recordId])
        return {name, phone, date, id: recordId}
    }

    public async getAll(){
        const allRecords: any = await this.sendQuery(`SELECT * FROM \`Record\``, [])
        console.log(allRecords);
        
        return allRecords
    }
}