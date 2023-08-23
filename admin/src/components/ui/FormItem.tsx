
type FormItemProps = {
    value: string,
    label: string
    updateFormState: (text: string) => void
}

export default function FormItem({updateFormState, value, label}: FormItemProps){


    return(
        <div className="form-group">
        <label>{label}</label>
        <input onChange={(event) => updateFormState(event.currentTarget.value)} value={value} type="text" className="form-control" />
      </div>
    )
}