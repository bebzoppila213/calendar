
export const getFirstLastDayInMonth = (date: Date) => {
    const year = date.getFullYear() 
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return {
        firstDay,
        lastDay
    }
}