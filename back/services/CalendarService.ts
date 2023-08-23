import BaseService from './BaseService'

export default class CalendarService extends BaseService{

    public async create(name: string, phone: string, date: string){
        const record = await this.prisma.record.create({data: {name: name, phone: phone, date: date}})
        this.prisma.$disconnect()
        return record
    }

    public async get(firstDate: Date, lastDate: Date){
        const records = await this.prisma.record.findMany({where: {date: {
            gte: firstDate,
            lte: lastDate
        }}})
        this.prisma.$disconnect()
        return records
    }

    public async delete(recordId: number){
        const deleteRecord = await this.prisma.record.delete({where: {id: recordId}})
        return deleteRecord
    }

    public async update(recordId: number, name: string, phone: string, date: string){
        const updateRecord = await this.prisma.record.updateMany({where: {id: recordId}, data: {name, phone, date: new Date(date)}})
        return updateRecord
    }

    public async getAll(){
        const allRecords = await this.prisma.record.findMany()
        return allRecords
    }
}