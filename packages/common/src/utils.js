const currencyFormat = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR'
});

export const formatCurrency = currencyFormat.format;
