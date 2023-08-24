import BaseService from '../BaseService'
import { ICalendarService } from './CalendarServiceInterface'

export default class CalendarService extends BaseService implements ICalendarService{

    public async create(name: string, phone: string, date: string){
        const record = await this.prisma.record.create({data: {name: name, phone: phone, date: date}})
        return record
    }

    public async get(firstDate: Date, lastDate: Date){
        const records = await this.prisma.record.findMany({where: {date: {
            gte: firstDate,
            lte: lastDate
        }}})
        return records
    }

    public async delete(recordId: number){
        const deleteRecord = await this.prisma.record.delete({where: {id: recordId}})
        return deleteRecord
    }

    public async update(recordId: number, name: string, phone: string, date: string){
        await this.prisma.record.updateMany({where: {id: recordId}, data: {name, phone, date: new Date(date)}})
        return {name, phone, date, id: recordId}
    }

    public async getAll(){
        const allRecords = await this.prisma.record.findMany()
        return allRecords
    }
}