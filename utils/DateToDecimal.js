export const DateToDecimal = `${new Date().getFullYear().toString()}${
  (new Date().getMonth() + 1).toString.length == 1
    ? 0 + (new Date().getMonth() + 1).toString()
    : (new Date().getMonth() + 1).toString()
}${
  new Date().getDate().toString().length == 1
    ? 0 + new Date().getDate().toString()
    : new Date().getDate().toString()
}`;
