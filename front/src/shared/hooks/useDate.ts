import moment from "moment"
import { useState } from "react";

export default function useDate(){
    const [currentDate, setCurrentDate] = useState(moment().locale('ru'))

    const addMonths = () => {
        setCurrentDate(moment(currentDate).add(1, 'M'))
    }

    const subtractMonths = () => {
        setCurrentDate(moment(currentDate).subtract(1, 'M'))
    }

    return{
        currentDate,
        addMonths,
        subtractMonths
    }
}