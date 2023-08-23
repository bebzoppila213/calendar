import { configureStore } from '@reduxjs/toolkit'
import recordSlice from '../entities/calendar/model/state'
export const store = configureStore({
  reducer: {
    record: recordSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch