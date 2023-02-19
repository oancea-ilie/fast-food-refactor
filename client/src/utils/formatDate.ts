export const formatDate = (date: string) => {
  const now = new Date(date);
  const formattedDate = now.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  return formattedDate;
};
