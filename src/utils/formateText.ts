export const formateText = (text: string) => {
  if (text.length > 320) {
    return text.substring(0, 320).trim() + "...";
  }
  return text;
};
