export function formattedDate(date) {
  const inputDateString = date;

  const inputDate = new Date(inputDateString);

  const formattedDate = `   ${("0" + inputDate.getDate()).slice(-2)}-${(
    "0" +
    (inputDate.getMonth() + 1)
  ).slice(-2)}-${inputDate.getFullYear()}`;
  return formattedDate;
}

export function formattedHour(date) {
  const inputDateString = date;

  const inputDate = new Date(inputDateString);

  const formattedDate = `${("0" + inputDate.getHours()).slice(-2)} : ${(
    "0" + inputDate.getMinutes()
  ).slice(-2)}`;
  return formattedDate;
}
