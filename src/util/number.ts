export const isNaturalNumber = (input: string | number): boolean => {
  const num = typeof input === 'string' ? Number(input) : input;
  return Number.isInteger(num) && num > 0;
};
