import { IRecord } from "../types/calendar";

type CalendarTableItemProps = {
    record: IRecord
    btnDelClick: (recordId: number) => void
    btnChangeClick: (recordId: number) => void
}


export default function CalendarTableItem({ record, btnDelClick, btnChangeClick }: CalendarTableItemProps) {
  return (
    <tr>
      <th scope="row">{record.id}</th>
      <td>{record.name}</td>
      <td>{record.phone}</td>
      <td>{record.date}</td>
      <td>
        <button onClick={() => btnDelClick(record.id)} className="btn btn-danger">Удалить</button>
        <button onClick={() => btnChangeClick(record.id)} className="btn btn-primary">Изменить</button>
      </td>
    </tr>
  );
}
