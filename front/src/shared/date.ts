export const daysInMonth = (date: Date) => {
    return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}