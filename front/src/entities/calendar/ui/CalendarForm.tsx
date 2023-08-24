import FormItem from "../../../shared/ui/FormItem";
import FormInfo from "../../../shared/ui/FormInfo";
import { FormEvent } from "react";
import { useAppDispatch } from "../../../shared/hooks/redux";
import { createRecord } from "../model/api";
import useForm from "../../../shared/hooks/useForm";
type CalendarFormProps = {
  activeDate: Date | null;
};

export default function CalendarForm({ activeDate }: CalendarFormProps) {
  const { formState, updateFormState, formIsValid } = useForm(
    { name: "", phone: "" },
    ["name", "phone"]
  );

  const dispatcher = useAppDispatch();

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    if (formIsValid()) {
      dispatcher(createRecord({ ...formState, date: activeDate }));
    }
  };

  const getActiveDateString = () => {
    return activeDate?.toLocaleString("default", {day: "numeric",month: "long", year: "numeric"}) || ''
  }

  return (
    <form onSubmit={submitForm} className={"calendar-form form " + (activeDate && " calendar-form--open")}>
      <FormInfo text={getActiveDateString()}/>
      <FormItem
        pattern={/[\S\w\d]{2,18}/}
        label="Ваше имя"
        onChange={(text) => updateFormState("name", text)}
      />
      <FormItem
        pattern={/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}
        label="Ваш телефон"
        onChange={(text) => updateFormState("phone", text)}
      />
      <button className="form-btn btn">Add</button>
    </form>
  );
}
