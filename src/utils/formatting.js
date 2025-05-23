export const currencyFormatter = (currency = 'GBP') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
}

export const formatCurrencyLabel = (currency = 'GBP', short = false) => {
  if(currency === 'GBP') return short ? '£GBP' : 'British Pounds (£GBP)';
  if(currency === 'USD') return short ? '$USD' : 'US Dollars ($USD)';
  if(currency === 'EUR') return short ? '€EUR' : 'Euros (€EUR)';
  if(currency === 'CHF') return short ? '₣CHF' : 'Swiss Francs (₣CHF)';
}

export const formatCurrency = (value, style = true, currency = 'GBP', styleProfit = false) => {
  if(!isNaN(value)) {
    if(value >= 0) {
      if(styleProfit && style) {
        return <span className="text-green-500">{currencyFormatter(currency).format(Math.abs(value))}</span>
      }
      return currencyFormatter(currency).format(Math.abs(value))
    }
    if(style) {
      return <span className="text-red-600">({currencyFormatter().format(Math.abs(value))})</span>
    }
    return `(${currencyFormatter().format(Math.abs(value))})`
  }
}

export const formatDelta = (value, percent, currency = 'GBP') => {
  if(!isNaN(value)) {
    const valueOutput = currencyFormatter(currency).format(Math.abs(value));

    if(value > 0) {
      return <span className="text-green-500">+{valueOutput} ({percent.toFixed(2)}%)</span>
    } 
    if(value < 0) {
      return <span className="text-red-600">-{valueOutput} ({percent.toFixed(2)}%)</span>
    }

    return <span className="text-gray-400">{valueOutput} ({percent.toFixed(2)}%)</span>
  }
}

export const formatStatus = (status) => {
  if(status === 'passed') {
    return <span className="text-green-500 font-bold">Passed</span>
  } 
  if(status === 'settled') {
    return <span className="text-green-500 font-bold">Settled</span>
  } 
  if(status === 'uploaded') {
    return <span className="text-green-500 font-bold">Uploaded</span>
  } 
  if(status === 'failed') {
    return <span className="text-red-600 font-bold">Failed</span>
  }
  if(status === 'consider') {
    return <span className="text-red-600 font-bold">Consider</span>
  }
  if(status === 'in-review') {
    return <span className="text-orange-400 font-bold">In Review</span>
  }
  if(status === 'unsettled') {
    return <span className="text-orange-400 font-bold">Unsettled</span>
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

export const formatMetalWeight = (value) => {
  if(!isNaN(value)) {
    return `${Math.abs(value).toFixed(3)} t/oz`;
  }
  return value;
}

export const formatPercent = (value) => {
  if(!isNaN(value)) {
    return `${Math.abs(value).toFixed(2)}%`;
  }
  return value;
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

export const formatOrderStatus = (value) => {
  switch(value) {
    case 'Blocked':
    case 'Rejected':
    case 'Partial Cancel':
    case 'Cancelled':
    case 'Pending':
      return <span className="text-red-600 font-bold">{value}</span>
    case 'Cleared':
    case 'Filled':
    case 'Settled':
      return <span className="text-green-400 font-bold">{value}</span>
    case 'Clearing':
      return <span className="text-gray-900 font-bold">{value}</span>
    case 'Pending Cancel':
      return <span className="text-orange-400 font-bold">{value}</span>
    case 'Acknowledged':
    case 'Pending Market Fill':
    default:
      return <span className="text-gray-400">{value}</span>
  }
}

export const formatReportStatusCode = (value) => {
  const style = 'block px-6 py-1 rounded-full text-center'

  switch(value) {
    case 'pending':
      return <span className={`${style} bg-orange-400 font-bold`}>Pending</span>
    case 'submitted':
      return <span className={`${style} bg-orange-400 font-bold`}>Submitted</span>
    case 'completed':
    default:
      return <span className={`${style} bg-green-500 font-bold`}>Completed</span>
  }
}