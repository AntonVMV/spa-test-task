export const fetchRequest = async (url: string) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
