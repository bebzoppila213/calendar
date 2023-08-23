import { IRecord } from "../types";

type DayItemProps = {
  dayNumber: number;
  updateActiveDate: () => void;
  record?: IRecord;
};

export default function DayItem({
  dayNumber,
  updateActiveDate,
  record,
}: DayItemProps) {
  return (
    <li
      onClick={() => !Boolean(record) && updateActiveDate()}
      className="day-item"
    >
      <span className="day-item__number">{dayNumber + 1}</span>
      <span className="day-item__user">{record?.name}</span>
    </li>
  );
}
