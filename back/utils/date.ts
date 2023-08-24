
export const getFirstLastDayInMonth = (date: Date) => {
    const year = date.getFullYear() 
    const month = date.getMonth();
    const firstDay = new Date(year, month);
    const lastDay = new Date(year, month + 1, 1);
    return {
        firstDay,
        lastDay
    }
}