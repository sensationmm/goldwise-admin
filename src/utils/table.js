

export const styleCellDefault = 'text-sm border-b border-separate border-slate-300 px-8 first:pl-4 last:pr-4 py-3 whitespace-nowrap bg-slate-100'

export const styleCell = `${styleCellDefault} text-center`
export const styleEmptyCell = (cellDefault = styleCellDefault) =>  `${cellDefault} !border-b-0`
export const styleHeader = (cellDefault = styleCellDefault) =>  `${cellDefault} !text-left font-bold`
export const styleHeaderFilled = (cellDefault = styleCellDefault) =>  `${cellDefault} !text-left bg-slate-200`
export const styleHeaderFilledDark = (cellDefault = styleCellDefault) =>  `${cellDefault} !text-left bg-slate-300`
export const styleSectionHeader = (cellDefault = styleCellDefault) =>  `${cellDefault} !text-left border-b-0`
export const styleTotal = (cellDefault = styleCellDefault) => `${cellDefault} border-separate border-b-0 border-t-2 border-slate-900`