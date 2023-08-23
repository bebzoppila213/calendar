import useDate from "../shared/hooks/useDate";
import CalendarForm from "../entities/calendar/ui/CalendarForm";
import CalendarMenu from "../entities/calendar/ui/CalendarMenu";
import DayList from "../entities/calendar/ui/DayList";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import moment from "moment";
import { useAppDispatch } from "../shared/hooks/redux";
import { loadRecords } from "../entities/calendar/model/api";

export default function Calendar() {
  const { currentDate, addMonths, subtractMonths } = useDate();
  const [activeDate, setActiveDate] = useState<null | Moment>(null);
  const dispatcher = useAppDispatch();

  const updateActiveDate = (dayNumber: number) => {
    setActiveDate(
      moment({
        year: currentDate.year(),
        month: currentDate.month(),
        day: dayNumber + 1,
      })
    );
  };

  useEffect(() => {
    dispatcher(loadRecords(currentDate.format()));
  }, [currentDate]);

  return (
    <section className="calendar">
      <div className="container">
        <div className="calendar-inner">
          <div className="calendar-info">
            <h2 className="calendar-title">
              {currentDate.format("MMMM YYYY")}
            </h2>
          </div>
          <DayList
            updateActiveDate={updateActiveDate}
            currentDate={currentDate}
          />
          <CalendarMenu addMonths={addMonths} subtractMonths={subtractMonths} />
          <CalendarForm activeDate={activeDate} />
        </div>
      </div>
    </section>
  );
}
