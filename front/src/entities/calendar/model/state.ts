import { createSlice } from "@reduxjs/toolkit";
import { IRecord } from "../types";
import { loadRecords, createRecord } from "./api";

export interface RecordState {
  records: IRecord[];
}

const initialState: RecordState = {
  records: [],
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(loadRecords.fulfilled, (state, action) => {
      state.records = action.payload.data;
    });
    builder.addCase(createRecord.fulfilled, (state, action) => {
      state.records.push(action.payload.data)
    });
  },
});

export default recordSlice.reducer;
