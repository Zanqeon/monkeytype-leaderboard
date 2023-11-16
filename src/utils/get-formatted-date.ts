export const getFormattedRecordDate = (timestamp: number) => {
  if (!timestamp) return '';
  return new Date(timestamp).toLocaleDateString('en-GB', {
    month: '2-digit',
    day: '2-digit',
  });
};
