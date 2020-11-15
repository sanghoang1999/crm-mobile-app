const months = [
  'Một',
  'Hai',
  'Ba',
  'Tư',
  'Năm',
  'Sáu',
  'Bảy',
  'Tám',
  'Chín',
  'Mười',
  'Mười Một',
  'Mười Hai',
];
export const getDateTitleFormat = (d) => {
  let date = new Date(d);
  return (
    `${date.getDate()}` +
    ' Tháng ' +
    months[date.getMonth()] +
    ', ' +
    date.getFullYear()
  );
};
export const getTimeFormat = (d) => {
  let date = new Date(d);
  return (
    `${date.getHours() < 10 ? '0':''}` +
    `${date.getHours()}:` +
    `${date.getMinutes() < 10? '0':''}` +
    `${date.getMinutes()}`
  );
};
export const getActivityDateFormat = (d) => {
  let date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
