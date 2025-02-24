import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import data from '../donations.json'

const columns = [
  { field: 'Donor', headerName: 'Donor', width: 300,  },
  { field: 'Amount', headerName: 'Amount', width: 300 },
 
]

export default function Donations() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(
      data.map((doc) => ({
        id: doc.ID,
        ...doc
        }))
    );

  }, [])

  console.log(tableData);

  return (
    <>

    <div style={{ height: 700, width: '50%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={20}
      />
    </div>
    </>
  )
}

 