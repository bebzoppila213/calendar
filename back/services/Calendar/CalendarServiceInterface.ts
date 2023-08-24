
export interface IRecord{
    id: number;
    name: string;
    phone: string;
    date: string | Date;
}

export interface ICalendarService{
    create: (name: string, phone: string, date: string) => Promise<IRecord>
    get: (firstDate: Date, lastDate: Date) => Promise<IRecord[]>
    delete: (recordId: number) => Promise<{id: number}>
    update: (recordId: number, name: string, phone: string, date: string) => Promise<IRecord>
    getAll: () => Promise<IRecord[]>
}