const formatValue = (value: number | string): string => {
  const numericValue = Number(value);
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue);
};
export default formatValue;
