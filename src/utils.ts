export const formattedDate = (date: Date) => {
  const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  const day = String(localDate.getDate()).padStart(2, '0');
  const month = String(localDate.getMonth() + 1).padStart(2, '0');
  const year = localDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export function getLastWeek(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
