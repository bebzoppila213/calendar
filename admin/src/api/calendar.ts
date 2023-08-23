import axios from "axios"
import { IRecord } from "../types/calendar"
import { BASE_URL, IResponse } from "./config"


export const loadAllRecords = async () => {
    const response = await axios.get<IResponse<IRecord[]>>(BASE_URL + "/calendar/all")
    return response.data
}

export const deleteRecord = async (recordId: number) => {
    const response = await axios.delete<IResponse<IRecord[]>>(BASE_URL + "/calendar", {data: {recordId}})
    return response.data
}

export const putRecord = async (record: IRecord) => {
    const response = await axios.put<IResponse<IRecord[]>>(BASE_URL + "/calendar", record)
    return response.data
}
