export const convertDate = (date: number) => {
  return new Date(date).toLocaleString("en-US", { dateStyle: "medium" });
};

export const setHashTags = (str: string) => {
  return str
    .split(" ")
    .map((item) => "#" + item)
    .join(" ");
};

export const convertTime = (sec: number) => {
  return Math.round(sec / 60);
};
