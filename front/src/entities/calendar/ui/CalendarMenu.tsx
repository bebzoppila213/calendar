
type CalendarMenuProps = {
    subtractMonths: () => void
    addMonths: () => void
}

export default function CalendarMenu({subtractMonths, addMonths}: CalendarMenuProps){
    

    return(
        <div className="calendar-menu">
            <button onClick={() => subtractMonths()} className="btn">
              Назад
            </button>
            <button onClick={() => addMonths()} className="btn">
              Далее
            </button>
          </div>
    )
}