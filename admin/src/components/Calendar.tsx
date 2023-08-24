import { useEffect, useState } from "react";
import { loadAllRecords, deleteRecord, putRecord } from "../api/calendar";
import { IRecord } from "../types/calendar";
import CalendarTable from "./CalendarTable";
import FormChange from "./FormChange";


export default function Calendar() {
  const [records, setRecords] = useState<IRecord[]>([]);
  const [changeRecord, setChangeRecord] = useState<IRecord | null>(null)

  useEffect(() => {
    loadAllRecords().then(data => {
        setRecords(data.data);
    })
  },[])

  const btnDelClick = async (recordId: number) => {
    
    const deleteResult = await deleteRecord(recordId)
    if(deleteResult.ok){
      setRecords(records.filter(rec => rec.id !== recordId))
    }
  }

  const btnChangeClick = (recordId: number) => {
    const record = records.find(rec => rec.id === recordId)
    if(record){
      setChangeRecord({...record})
    }
  }

  const updateChangeRecord = (key: keyof IRecord, value: string) => {
    if(changeRecord){
      setChangeRecord({...changeRecord, [key]: value})
    }
  }

  const formChangeSubmit = async () => {
    if(changeRecord){
      const changeData = await putRecord(changeRecord)
      if(changeData.ok){
        setRecords(records.map(rec => rec.id === changeRecord.id ? {...changeRecord} : rec))
        setChangeRecord(null)
      }
      
    }
  }

  return (
    <section className="calendar">
      <div className="container">
        <div className="calendar-inner">
          <h2>Календарь</h2>
          <CalendarTable btnChangeClick={btnChangeClick} btnDelClick={btnDelClick} records={records} />
          {
            changeRecord && <FormChange onSubmit={formChangeSubmit} updateChangeRecord={updateChangeRecord} record={changeRecord} />
          }
        </div>
      </div>
    </section>
  );
}
