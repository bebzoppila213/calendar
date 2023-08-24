import { IRecord } from "../types/calendar";
import FormItem from "./ui/FormItem";

type FormChangeProps = {
  record: IRecord;
  updateChangeRecord: (key: keyof IRecord, value: string) => void;
  onSubmit: () => void;
};

export default function FormChange({
  record,
  updateChangeRecord,
  onSubmit,
}: FormChangeProps) {
  
  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={formSubmit}>
      <FormItem
        label="Имя"
        value={record.name}
        updateFormState={(text) => updateChangeRecord("name", text)}
      />
      <FormItem
        label="Телефон"
        value={record.phone}
        updateFormState={(text) => updateChangeRecord("phone", text)}
      />
      <div className="form-group">
        <label>Дата</label>
        <input
          onChange={(date) =>
            updateChangeRecord("date", date.currentTarget.value)
          }
          type="date"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        отправить
      </button>
    </form>
  );
}
