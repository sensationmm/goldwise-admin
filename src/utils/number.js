export const formatCurrency = (value, style = true, currency = 'GBP') => {
  let CurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

  if(value >= 0) {
    return CurrencyFormatter.format(Math.abs(value))
  }
  if(style) {
    return <span className="text-red-600">({CurrencyFormatter.format(Math.abs(value))})</span>
  }
  return `(${CurrencyFormatter.format(Math.abs(value))})`
}