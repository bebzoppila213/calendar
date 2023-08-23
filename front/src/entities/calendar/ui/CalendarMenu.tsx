
type CalendarMenuProps = {
    subtractMonths: () => void
    addMonths: () => void
}

export default function CalendarMenu({subtractMonths, addMonths}: CalendarMenuProps){
    

    return(
        <div className="calendar-menu">
            <button onClick={() => subtractMonths()} className="btn">
              Pref
            </button>
            <button onClick={() => addMonths()} className="btn">
              Next
            </button>
          </div>
    )
}