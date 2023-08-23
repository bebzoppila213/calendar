import { Moment } from "moment";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import DayItem from "./DayItem";

type DayListProps = {
    currentDate: Moment,
    updateActiveDate: (index: number) => void
}

export default function DayList({currentDate, updateActiveDate}:DayListProps){
    const records = useAppSelector(state => state.record.records)

    const getRecordByDay = (dayIndex: number) => {
        return records.find((rec) => new Date(rec.date).getDate() === dayIndex);
    };

    return(
        <ul className="day-list">
            {new Array(currentDate.daysInMonth()).fill(0).map((_, index) => (
              <DayItem
                key={index}
                record={getRecordByDay(index + 1)}
                updateActiveDate={() => updateActiveDate(index)}
                dayNumber={index}
              />
            ))}
          </ul>
    )
}