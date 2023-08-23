import { useState } from "react";

type FormItemProps = {
    label: string,
    onChange: (text: string) => void;
    pattern: RegExp;
}

export default function FormItem({label, onChange, pattern}: FormItemProps) {
  const [isError, setIsError] = useState(false)

  const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(pattern.test(event.currentTarget.value)){
      onChange(event.currentTarget.value)
      setIsError(false)
    }else{
      onChange("")
      setIsError(true)
    }
  }

  return (
    <div className="form-item">
      <label className="form-item__label" htmlFor="">
        {label}
      </label>
      <input onBlur={onBlur} className="form-item__input" type="text" />
      {
        isError && <span className="form-item__error">Ошибка</span>
      }
    </div>
  );
}
