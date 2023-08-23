import { useState } from "react";


export default function useForm<T extends object>(defaultFormState: T, requereFields: Array<keyof T>){
    const [formState, setFormState] = useState(defaultFormState)

    const updateFormState = (key: keyof T, value: string) => {
        setFormState({...formState, [key]: value})
    }

    const formIsValid = () => {
        return requereFields.every(field => String(formState[field]).length > 2)
    }

    return{
        formState,
        updateFormState,
        formIsValid
    }
}