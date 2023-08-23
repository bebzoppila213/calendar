import FormItem from "../../../shared/ui/FormItem";
import FormInfo from "../../../shared/ui/FormInfo";
import { Moment } from "moment";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../shared/hooks/redux";
import { createRecord } from "../model/api";
import useForm from "../../../shared/hooks/useForm";
type CalendarFormProps = {
  activeDate: Moment | null;
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
      dispatcher(createRecord({ ...formState, date: activeDate?.toJSON() }));
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className={"calendar-form form " + (activeDate && " calendar-form--open")}
    >
      <FormInfo text={activeDate?.format("MMMM Do YYYY") || " "} />
      <FormItem
        pattern={/[\S\w\d]{2,18}/}
        label="your name"
        onChange={(text) => updateFormState("name", text)}
      />
      <FormItem
        pattern={/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}
        label="Your phone number"
        onChange={(text) => updateFormState("phone", text)}
      />
      <button className="form-btn btn">Add</button>
    </form>
  );
}
