export const formatCurrency = (value, currency = 'GBP') => {
  let CurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

  if(value >= 0) {
    return CurrencyFormatter.format(Math.abs(value))
  }
  return `(${CurrencyFormatter.format(Math.abs(value))})`
}