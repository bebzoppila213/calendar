import { IRecord } from "../types/calendar";
import CalendarTableItem from "./CalendarTableItem";
type CalendarTableProps = {
  records: IRecord[];
  btnDelClick: (recordId: number) => void
  btnChangeClick: (recordId: number) => void
};

export default function CalendarTable({ records, btnDelClick, btnChangeClick }: CalendarTableProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {records && records.map((rec) => (
          <CalendarTableItem btnChangeClick={btnChangeClick} key={rec.id} btnDelClick={btnDelClick} record={rec} />
        ))}
      </tbody>
    </table>
  );
}
