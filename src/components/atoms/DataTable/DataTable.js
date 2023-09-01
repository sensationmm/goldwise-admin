import { DataGrid, GridColumnMenu } from "@mui/x-data-grid"

 const DataTable = ({
  columns = [],
  rows = [],
  defaultWidth = 100
 }) => {
  if(rows.length > 0 && columns.length !== Object.keys(rows[0]).length) {
    return (
      <>
        <div className="text-gray-800 dark:text-gray-100">Data Mismatch</div>
       <div className="text-gray-800 dark:text-gray-100">{columns.length} Headers / {Object.keys(rows[0]).length} Columns</div>
      </>
    )
  }

  return (
    <DataGrid
      columnVisibilityModel={{
        id: false,
      }}
      columns={columns.map((col) => ({ width: defaultWidth, ...col  }))}
      rows={rows}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
      }
      getCellClassName={(params) => params.formattedValue.toString().substring(0,1) === '(' ? 'negativeNumber' : ''}
      sx={{
        border: 0,
        ".MuiDataGrid-columnHeaders, .MuiDataGrid-footerContainer, .MuiTablePagination-root": {
          backgroundColor: "#64748b",
          border: 0,
          color: "#ffffff",
          padding: "20px 10px"
        },
        ".MuiDataGrid-cell": {
          border: 0,
          padding: "20px"
        },
        ".MuiDataGrid-cell.negativeNumber": {
          color: "#ff0000"
        },
        ".MuiDataGrid-row": {
          marginBottom: '1px',
          border: 0
        },
        ".MuiDataGrid-row.Mui-odd": {
          backgroundColor: "#cbd5e1",
        },
        ".MuiDataGrid-row.Mui-even": {
          backgroundColor: "#94a3b8",
        },
        ".MuiSvgIcon-root-MuiSelect-icon, .MuiSvgIcon-root": {
          color: "#ffffff"
        },
        ".Mui-disabled svg": {
          color: "rgba(255,255,255,0.2)"
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          whiteSpace: "normal",
          lineHeight: "normal"
        },
        "&:hover .MuiDataGrid-columnHeaderTitle": {
          whiteSpace: "nowrap"
        },
        "& .MuiDataGrid-columnHeader": {
          height: "unset !important"
        },
        "& .MuiDataGrid-columnHeaders": {
          maxHeight: "168px !important"
        },
        ".MuiDataGrid-iconSeparator": {
          display: 'none'
        }
      }}
      disableRowSelectionOnClick
      slots={{
        columnMenu: (props) => <GridColumnMenu
          {...props}
          slots={{
            columnMenuColumnsItem: null,
          }}
        />
      }}
    />
  )
 }

 export default DataTable