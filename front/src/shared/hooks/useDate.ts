import moment from "moment"
import { useState } from "react";

export default function useDate(){
    const [currentDate, setCurrentDate] = useState(new Date())

    const addMonths = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
    }

    const subtractMonths = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
    }

    return{
        currentDate,
        addMonths,
        subtractMonths
    }
}