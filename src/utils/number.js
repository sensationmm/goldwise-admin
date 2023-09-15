export const formatCurrency = (value, style = true, currency = 'GBP', styleProfit = false) => {
  let CurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

  if(!isNaN(value)) {
    if(value >= 0) {
      if(styleProfit && style) {
        return <span className="text-green-500">{CurrencyFormatter.format(Math.abs(value))}</span>
      }
      return CurrencyFormatter.format(Math.abs(value))
    }
    if(style) {
      return <span className="text-red-600">({CurrencyFormatter.format(Math.abs(value))})</span>
    }
    return `(${CurrencyFormatter.format(Math.abs(value))})`
  }
}
export const formatWeight = (value, style = true) => {
  if(!isNaN(value)) {
    if(value >= 0) {
      return Math.abs(value).toFixed(3)
    }
    if(style) {
      return <span className="text-red-600">({Math.abs(value).toFixed(3)})</span>
    }
    return `(${Math.abs(value).toFixed(3)})`
  }
}

export const formatStatusCode = (value) => {
  switch(value) {
    case 0:
      return <span className="text-red-600">No</span>
    case 2:
      return <span className="text-orange-400">Error</span>
    case 1:
    default:
      return <span className="text-green-400">Yes</span>
  }
}

export const formatReportStatusCode = (value) => {
  const style = 'block px-6 py-1 rounded-full text-center'

  switch(value) {
    case 'pending':
      return <span className={`${style} bg-slate-300`}>Pending</span>
    case 'completed':
    default:
      return <span className={`${style} bg-green-500`}>Completed</span>
  }
}