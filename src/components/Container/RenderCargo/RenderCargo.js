import React from 'react';
import HeaderTable from './HeaderTable/HeaderTable';
import RenderString from './RenderString/RenderString';

export default function RenderCargo({list}) {
  return (
    <div className='cargo-table'>
     <table className='table table-bordered'>
      <HeaderTable/>
      <tbody>
        {list && list.map((el, index) => <RenderString key={index} item={el}/>) }
      </tbody>
     </table>
    </div>
  )
}
