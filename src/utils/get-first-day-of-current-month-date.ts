export const getFirstDayOfCurrentMonthDate = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getUTCFullYear();
  const firstDayOfThisMonth = new Date(
    Date.UTC(currentYear, currentDate.getUTCMonth(), 1).valueOf()
  );

  return firstDayOfThisMonth;
};
