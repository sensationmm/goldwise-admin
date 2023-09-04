import { useState } from "react"
import { formatCurrency } from "../../../utils/number"
import Input from "../Input/Input"
import Button from "../Button/Button"

 const DataTable = ({
  headers = [],
  data = [],
  dataTypes = [],
  indexColumn = 0,
  excludeFilters = []
 }) => {
  const [sort, setSort] = useState(null)
  const [sortDirection, setSortDirection] = useState('asc')
  const [filterColumn, setFilterColumn] = useState(null)
  const [filters, setFilters] = useState({})

  if(data.length > 0 && headers.length !== Object.keys(data[0]).length) {
    return (
      <>
        <div className="text-gray-800 dark:text-gray-100">Data Mismatch</div>
       <div className="text-gray-800 dark:text-gray-100">{headers.length} Headers / {Object.keys(data[0]).length} Columns</div>
      </>
    )
  }

  const handleSort = (item) => {
    if(sort !== item) {
      setSort(item)
      setSortDirection('asc')
    } else {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    }
  }

  const getSortValDefault = () => sortDirection === 'asc' ? 1 : -1;
  const getSortValInvert = () => sortDirection === 'asc' ? -1 : 1;

  const formatValue = (value, type) => {
    switch(type) {
      case 'currency':
        if(value < 0) {
          return <span className="text-red-600">{formatCurrency(value)}</span>
        }
        return formatCurrency(value)
      case 'string':
      default: 
        return value;
    }
  }

  const initialFilter = {'text': '', 'from': '', 'to': ''}

  const activateFilter = (columnID) => {
    setFilterColumn(columnID)
    if(!filters.hasOwnProperty(columnID.toString())) {
      setFilters({
        ...filters,
        [columnID]: initialFilter
      })
    }
  }

  const setFilter = (columnID, key, value) => {
    setFilters({
      ...filters,
      [columnID]: {...filters[columnID], [key]: value}
    })
  }

  const deactivateFilter = (columnID) => {
    if(filters[columnID]['text'] === '' && filters[columnID]['from'] === '' && filters[columnID]['to'] === '') {
      const newFilters = {...filters}
      delete newFilters[columnID]
      setFilters(newFilters)
    }
    setFilterColumn(null)
  }

  const clearFilter  = (columnID) => {
    const newFilters = {...filters}
    delete newFilters[columnID]
    setFilters(newFilters)
    setFilterColumn(null)
  }

  return (
    <>
    {filterColumn && 
      <div className="fixed w-[530px] -ml-[265px] p-6 left-1/2 top-1/4 bg-white border border-slate-600">
        <div className="font-bold">FILTER COLUMN {headers[filterColumn]}</div>
        
        <div className="grid grid-cols-[200px_1fr]">
          <div className="flex items-center justify-left">Equals/Contains</div>
          <Input
            value={filters[filterColumn] ? filters[filterColumn]['text'] : ''}
            onChange={(ev) => filters[filterColumn] && setFilter(filterColumn, 'text', ev.target.value) }
          />
        </div>
        
        {['number', 'currency'].includes(dataTypes[filterColumn]) && <>
          <div className="grid grid-cols-[200px_1fr]">
            <div className="flex items-center justify-left">Greater than</div>
            <Input
              value={filters[filterColumn] ? filters[filterColumn]['from'] : ''}
              onChange={(ev) => filters[filterColumn] && setFilter(filterColumn, 'from', ev.target.value) }
            />
          </div>
          
          <div className="grid grid-cols-[200px_1fr]">
            <div className="flex items-center justify-left">Less than</div>
            <Input
              value={filters[filterColumn] ? filters[filterColumn]['to'] : ''}
              onChange={(ev) => filters[filterColumn] && setFilter(filterColumn, 'to', ev.target.value) }
            />
          </div>
        </>}

        <div className="grid grid-cols-2 gap-2 mt-4">
          <Button onClick={() => deactivateFilter(filterColumn)} label="Done" />
          <Button onClick={() => clearFilter(filterColumn)} label="Clear" />
        </div>
      </div>
    }

    <table className="border-separate border-spacing-y-0.5 table-fixed w-max text-sm">
      <thead>
        <tr>
        <th>Select</th>
        {headers.map((text, countHeader) => {
          return ( 
            <th key={`header-${countHeader}`} className="text-gray-800 dark:text-gray-100 px-3 py-2 text-left whitespace-normal">
              {text}
              <i
                className={`cursor-pointer fa text-sm pl-2 ${sortDirection === 'asc' || sort !== countHeader ? 'fa-chevron-down' : 'fa-chevron-up'} ${sort === countHeader ? 'text-red-600' : 'text-inherit' }`}
                aria-hidden="true"
                onClick={() => handleSort(countHeader)}
              />
              {!excludeFilters.includes(text) && <i
                className={`cursor-pointer fa fa-filter text-sm pl-2 ${filters.hasOwnProperty(countHeader.toString()) ? 'text-red-600' : 'text-inherit' }`}
                aria-hidden="true"
                onClick={() => activateFilter(countHeader)}
              />}
            </th>
          )
        })}
        </tr>
      </thead>
      <tbody>
      {data
        .sort((a, b) => sort !== null && a[sort] >= b[sort] ? getSortValDefault() : getSortValInvert())
        .filter((row) => {
          let show = true
          Object.keys(filters).forEach((column) => {
            if(
              (filters[column]['text'] !== '' && row[column].toLowerCase().indexOf(filters[column]['text'].toLowerCase()) < 0) ||
              (filters[column]['from'] !== '' && row[column] < filters[column]['from']) ||
              (filters[column]['to'] !== '' && row[column] > filters[column]['to'])
            ) {
              show = false
            }
          })

          return show
        })
        .map((row, countRow) => {
          const cellFormat = `px-3 py-3 ${countRow % 2 === 0 ? 'bg-slate-400' : 'bg-slate-300'}`

          return (
            <tr key={`row-${row[indexColumn]}`}>
              <td className={cellFormat}><input type="radio" /></td>
              {row.map((cell, countCell) => {
                return (
                  <td key={`row-${countRow}-cell-${countCell}`} className={`${cellFormat} ${['number','currency'].indexOf(dataTypes[countCell]) > -1 ? 'text-right' : ''}`}>
                    {formatValue(cell, dataTypes[countCell])}
                  </td>
                )})}
              </tr>
            )
        })
      }
      </tbody>
    </table>
    </>
  )
 }

 export default DataTable