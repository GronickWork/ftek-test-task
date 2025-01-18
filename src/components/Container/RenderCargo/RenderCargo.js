import React from 'react'
import HeaderTable from './HeaderTable/HeaderTable'

export default function RenderCargo() {
  return (
    <div className='cargo-table'>
     <table className='table table-bordered'>
      <HeaderTable/>
     </table>
    </div>
  )
}
