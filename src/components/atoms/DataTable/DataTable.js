import { useEffect, useState } from "react"
import { formatCurrency, formatMetalWeight, formatOrderStatus, formatPercent, formatStatusCode, formatWeight } from "../../../utils/formatting"
import Input from "../Input/Input"
import { Button, Checkbox } from "@mui/material";
import dayjs from "dayjs";

 const DataTable = ({
  headers = [],
  data = [],
  dataTypes = [],
  indexColumn = 0,
  excludeColumns = [],
  excludeFilters = [],
  excludeSort = [],
  excludeLiteralFilter = [],
  selected = [],
  onSelect = null,
  onSelectAll = null,
  maxPerPage = 10,
  paginate = true
 }) => {
  const [sort, setSort] = useState(indexColumn)
  const [sortDirection, setSortDirection] = useState('asc')
  const [editColumn, setEditColumn] = useState(null)
  const [filterColumn, setFilterColumn] = useState(null)
  const [filters, setFilters] = useState({})
  const [hiddenColumns, setHiddenColumns] = useState([])
  const [activePage, setActivePage] = useState(0)
  const [selectAll, setSelectAll] = useState(false)

  useEffect(() => {
    setActivePage(0);
  },[data]);

  if(data.length > 0 && headers.length !== Object.keys(data[0]).length) {
    return (
      <>
        <div className="text-gray-800 dark:text-gray-100">Data Mismatch</div>
       <div className="text-gray-800 dark:text-gray-100">{headers.length} Headers / {Object.keys(data[0]).length} Columns</div>
      </>
    )
  }

  const handleSort = (item, dir) => {
    if(sort !== item || sortDirection !== dir) {
      setSort(item)
      setSortDirection(dir)
    } else {
      setSort(indexColumn)
    }
    setEditColumn(null)
  }

  const handleHide = (item) => {
    const hidden = hiddenColumns.slice()

    if(!hiddenColumns.includes(item)) {
      hidden.push(item)
    } else {
      hidden.splice(hiddenColumns.indexOf(item), 1)
    }

    setHiddenColumns(hidden)
    setEditColumn(null)
  }

  const getSortValDefault = () => sortDirection === 'asc' ? 1 : -1;
  const getSortValInvert = () => sortDirection === 'asc' ? -1 : 1;

  const formatValue = (value, type) => {
    switch(type) {
      case 'percent':
        return formatPercent(value)
      case 'currency':
        return formatCurrency(value)
      case 'weight':
        return formatWeight(value)
      case 'metalWeight':
        return formatMetalWeight(value)
      case 'statusCode':
        return formatStatusCode(value)
      case 'orderStatus':
        return formatOrderStatus(value)
      case 'date':
        return value ? dayjs(value).format('DD/MM/YYYY') : ''
      case 'datetime':
        return value ? dayjs(value).format('DD/MM/YYYY HH:mm:s') : ''
      case 'string':
      default: 
        return value;
    }
  }

  const initialFilter = {'text': '', 'from': '', 'to': '', 'values': []}

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
    setActivePage(0)
  }

  const deactivateFilter = (columnID) => {
    if(filters[columnID]['text'] === '' && filters[columnID]['from'] === '' && filters[columnID]['to'] === '' && filters[columnID]['values'].length === 0) {
      const newFilters = {...filters}
      delete newFilters[columnID]
      setFilters(newFilters)
    }
    setFilterColumn(null)
    setActivePage(0)
  }

  const clearFilter  = (columnID) => {
    const newFilters = {...filters}
    delete newFilters[columnID]
    setFilters(newFilters)
    setFilterColumn(null)
    setActivePage(0)
  }

  const setFilterUnique = (columnID, value) => {
    const uniqueValues = filters[columnID]['values'].slice();

    if(uniqueValues.indexOf(value) === -1) {
      uniqueValues.push(value)
    } else {
      uniqueValues.splice(uniqueValues.indexOf(value), 1)
    }

    setFilter(columnID, 'values', uniqueValues)
  }

  const getUniqueValues = (columnID) => {
    const existingValues = []
    data.forEach((row) => {
      const value = row[columnID]

      if(existingValues.indexOf(value) === -1) {
        existingValues.push(value)
      }
    })

    return existingValues.sort((a, b) => a > b ? 1 :  -1).map((val,count) => (
      <div key={`filter-${columnID}-${count}`} className="text-sm mb-1">
        <Checkbox
          className="highlight"
          checked={filters[columnID].values.includes(val)}
          onChange={() => setFilterUnique(columnID, val)}
        />
        {val}
      </div>
    ))
  }

  const filteredData = data
    .sort((a, b) => a[sort] >= b[sort] ? getSortValDefault() : getSortValInvert())
    .filter((row) => {
      let show = true
      Object.keys(filters).forEach((column) => {
        if(
          (filters[column]['text'] !== '' && row[column].toLowerCase().indexOf(filters[column]['text'].toLowerCase()) < 0) ||
          (filters[column]['from'] !== '' && row[column] < filters[column]['from']) ||
          (filters[column]['to'] !== '' && row[column] > filters[column]['to']) ||
          (filters[column]['values'].length > 0 && !filters[column]['values'].includes(row[column]))
        ) {
          show = false
        }
      })

      return show
    })
            
  const numPages = Math.ceil(filteredData.length / maxPerPage)

  const renderPagination = () => {
    const showPrev = activePage > 0;
    const showNext = activePage + 1 < numPages;

    let pagesArray = [...Array(numPages)]
    if(numPages > 5) {
      pagesArray = [0,1,2,3,4];
      const pagesArrayEnd = [numPages-5, numPages-4, numPages-3, numPages-2, numPages-1];

      if(!pagesArray.concat(pagesArrayEnd).includes(activePage)) {
        pagesArray = pagesArray.slice(0,2).concat(['...',activePage-1,activePage,activePage+1,'...'],pagesArrayEnd.slice(-2));
      } else {
        if(pagesArray.includes(activePage)) {
          pagesArray = pagesArray.concat(['...'],pagesArrayEnd.slice(-2));
        } else {
          pagesArray = pagesArray.slice(0,2).concat(['...'],pagesArrayEnd);
        }
      }
    } else {
      pagesArray = pagesArray.map((_,count) => count);
    }

    return (
      <div className="flex justify-end items-center text-sm text-gray-400">
        <i className={`fa text-xs fa-chevron-left px-2 cursor-pointer ${!showPrev && 'cursor-not-allowed text-gray-200'}`} aria-hidden="true" onClick={() => showPrev ? setActivePage(activePage - 1) : undefined} />
        {pagesArray.map((pageNum, count) => {
          return pageNum !== '...' ?
          <div key={`page-${pageNum}`} className={`p-2 cursor-pointer ${activePage === pageNum && 'text-gray-900'}`} onClick={() => setActivePage(pageNum)}>{pageNum + 1}</div>
          : <div key={`page-separator-${count}`} className={`p-2 cursor-pointer ${activePage === pageNum && 'text-gray-900'}`}>...</div>
  })}
        <i className={`fa text-xs fa-chevron-right px-2 cursor-pointer ${!showNext && 'cursor-not-allowed text-gray-200'}`} aria-hidden="true" onClick={() => showNext ? setActivePage(activePage + 1) : undefined} />
      </div>
    )
  }

  return (
    <div className="relative">
      {editColumn !== null && 
        <div className="fixed w-[200px] -ml-[100px] py-3 left-1/2 top-1/4 bg-white border border-slate-600 z-[1000]">
          {!excludeSort.includes(headers[editColumn]) && <>
            <div className={`cursor-pointer px-6 py-3 ${sort === editColumn && sortDirection === 'asc' && 'text-red-600'}`} onClick={() => handleSort(editColumn, 'asc')} >
              <i className={`fa text-md fa-sort-amount-asc mr-2`} aria-hidden="true"/>Sort by ASC
            </div>
            <div className={`cursor-pointer px-6 py-3 pb-6 ${sort === editColumn && sortDirection === 'desc' && 'text-red-600'}`} onClick={() => handleSort(editColumn, 'desc')} >
              <i className={`fa text-md fa-sort-amount-desc mr-2`} aria-hidden="true"/>Sort by DESC
            </div>
          </>}
          <div className="pt-3 border-t border-slate-600">
            {!excludeFilters.includes(headers[editColumn]) && 
              <div className={`cursor-pointer px-6 py-3 ${filters.hasOwnProperty(editColumn.toString()) && 'text-red-600'}`} onClick={() => {  activateFilter(editColumn); setEditColumn(null); }}>
                <i className={`fa text-md fa-filter mr-2`} aria-hidden="true" />Filter
              </div>
            }
            <div className="cursor-pointer px-6 py-3" onClick={() => handleHide(editColumn)}>
              <i className={`fa text-md fa-ban mr-2`} aria-hidden="true"/>{!hiddenColumns.includes(editColumn) ? 'Hide' : 'Show'} Column
            </div>
          </div>
          <div className="w-full flex mx-auto justify-center">
            <Button onClick={() => setEditColumn(null)} color="secondary">Done</Button>
          </div>
        </div>
      }

      {filterColumn && 
        <div className="fixed w-[530px] -ml-[265px] p-6 left-1/2 top-1/4 bg-white border border-slate-600 z-[1000]">
          <div className="font-bold mb-3">FILTER COLUMN {headers[filterColumn]}</div>
          
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
          
          {(dataTypes[filterColumn] === 'string' || dataTypes[filterColumn] === 'statusCode') && !excludeLiteralFilter.includes(headers[filterColumn]) && <>
            <div className="grid grid-cols-[200px_1fr] mt-4">
              <div className="flex items-center justify-left">Values</div>
              <div className="px-3 pt-3 pb-2 bg-slate-200">
              {getUniqueValues(filterColumn)}
              </div>
            </div>
          </>}

          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button onClick={() => deactivateFilter(filterColumn)} variant="contained" color="secondary">Done</Button>
            <Button onClick={() => clearFilter(filterColumn)} variant="outlined" color="secondary">Clear</Button>
          </div>
        </div>
      }

      {((Object.keys(filters).length > 0 && filterColumn === null) || sort !== indexColumn || hiddenColumns.length > 0) && 
        <div className="flex justify-between bg-gray-200 mt-2 p-4 text-xs">
          {sort !== indexColumn && 
            <span>SORTED BY: {headers[sort]} 
              <span className="text-[10px] cursor-pointer hover:text-primary" onClick={() => setSort(indexColumn)}> [CLEAR SORT]</span>
            </span>
          }
          {Object.keys(filters).length > 0 && 
            <span>FILTERED BY: {Object.keys(filters).map(f => headers[f]).join(', ')}
              <span className="text-[10px] cursor-pointer hover:text-primary" onClick={() => setFilters({})}> [CLEAR ALL FILTERS]</span>
            </span> 
          }
          {hiddenColumns.length > 0 && 
            <span>{hiddenColumns.length} COLUMN{hiddenColumns.length !== 1 && 'S'} HIDDEN
              <span className="text-[10px] cursor-pointer hover:text-primary" onClick={() => setHiddenColumns([])}> [SHOW ALL]</span>
            </span>
          }
        </div>
      }

      <div className="w-full overflow-scroll rounded-sm border-gray-200 border px-2">
        <table className="border-separate border-spacing-y-0.5 text-sm">
          <thead>
            <tr>
            {onSelect !== null && 
              <th className="border-b">
                {onSelectAll && <Checkbox className="highlight" checked={selectAll} onChange={() => { onSelectAll(!selectAll); setSelectAll(!selectAll); }} />}
              </th>
            }
            {headers.map((text, countHeader) => {
              if(excludeColumns.includes(text)) {
                return <td key={`header-${countHeader}`}></td>
              }

              const renderEdit = !excludeSort.includes(text) || !excludeFilters.includes(text) ?
                <div className="cursor-pointer px-4" onClick={() => setEditColumn(countHeader)}>
                  <i
                    className={`fa text-sm fa-ellipsis-v ${(sort === countHeader && countHeader !== 0) || filters.hasOwnProperty(countHeader.toString()) ? 'text-red-600' : 'text-inherit' }`}
                    aria-hidden="true"
                  />
                </div>
                : <></>

                if(hiddenColumns.includes(countHeader)) {
                  return <td className="border-b text-red-600">{renderEdit}</td>
                }

                return ( 
                <th key={`header-${countHeader}`} className="text-gray-800 px-3 py-2 text-left border-b">
                  <div className="grid grid-cols-[1fr__30px] items-center">
                  <div className="min-w-[60px]">{text}</div>
                  {renderEdit}
                  </div>
                </th>
              )
            })}
            </tr>
          </thead>
          <tbody>
          {filteredData.length === 0 && <tr><td className="p-4" colSpan={headers.length}>No data to display</td></tr>}
          {filteredData.slice(activePage * maxPerPage, paginate ? (activePage + 1) * maxPerPage : undefined)
            .map((row, countRow) => {
              const cellFormat = `px-3 py-3 whitespace-nowrap max-w-[400px] text-ellipsis overflow-hidden`

              return (
                <tr key={`row-${row[indexColumn]}`}>
                  {onSelect !== null && 
                    <td className={cellFormat}>
                      {row[indexColumn] && <Checkbox
                        className="highlight"
                        checked={selected.includes(row[indexColumn])} 
                        onChange={() => { setSelectAll(false); onSelect(row[indexColumn]); }} 
                      />}
                    </td>
                  }
                  {row.map((cell, countCell) => {
                    if(excludeColumns.includes(headers[countCell])) {
                      return <td key={`row-${countRow}-cell-${countCell}`}></td>
                    } else if(hiddenColumns.includes(countCell)) {
                      return <td />
                    }
                    return (
                      <td key={`row-${countRow}-cell-${countCell}`} className={`${cellFormat} ${['number','currency'].indexOf(dataTypes[countCell]) > -1 ? 'text-right' : ''}`}>
                        {formatValue(cell, dataTypes[countCell])}
                      </td>
                    )})
                  }
                  </tr>
                )
            })
          }
          {paginate && activePage + 1 === numPages && 
            [...Array(filteredData.length % maxPerPage !== 0 ? maxPerPage - (filteredData.length % maxPerPage) : 0)]
            .map((_, count) => (<tr key={`spacer-${count}`} aria-hidden="true" className="h-[48px]"><td></td></tr>))
          }
          </tbody>
        </table>
      </div>
      {paginate && <div className="p-2 pr-0 border-t">{renderPagination()}</div>}
    </div>
  )
 }

 export default DataTable