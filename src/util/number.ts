export const isNaturalNumber = (str: string): boolean => {
  const num = Number(str);
  return Number.isInteger(num) && num > 0;
};
