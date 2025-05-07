export const styleCell = 'text-sm border-b border-separate border-slate-300 px-8 first:pl-4 last:pr-4 py-3 whitespace-nowrap bg-slate-100'
export const styleEmptyCell = (cellDefault = styleCell) =>  `${cellDefault} !border-b-0`
export const styleHeader = (cellDefault = styleCell) =>  `${cellDefault} text-left`
export const styleHeaderFilled = (cellDefault = styleCell) =>  `${cellDefault} text-left bg-slate-200`
export const styleSectionHeader = (cellDefault = styleCell) =>  `${cellDefault} text-left border-b-0`
export const styleTotal = (cellDefault = styleCell) => `${cellDefault} border-separate border-b-0 border-t-2 border-slate-900`