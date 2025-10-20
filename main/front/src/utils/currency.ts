export const formatCurrency = (amount: number, currency: string): string => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return formatter.format(amount).replace(/\s/g, ' ');
};
