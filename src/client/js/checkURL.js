export const checkUrl = (input) => {
  const regex =
    /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g;
  return regex.test(input);
};
