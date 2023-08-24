import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, IResponse } from "../../../shared/api/config";
import { IRecord } from "../types";

export const loadRecords = createAsyncThunk("record/loadRecords", async (date: Date) => {
    const response = await axios.get<IResponse<IRecord[]>>(BASE_URL + "/calendar", { params: { date: date } })
    return response.data
})

export const createRecord = createAsyncThunk("record/createRecord", async (data: unknown) => {
    const response = await axios.post<IResponse<IRecord>>(BASE_URL + "/calendar", data)
    return response.data
})