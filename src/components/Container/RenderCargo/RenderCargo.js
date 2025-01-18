import React from 'react';
import HeaderTable from './HeaderTable/HeaderTable';
import { cargoList } from '../../../components/utils/cargoList';
import RenderString from './RenderString/RenderString';

export default function RenderCargo() {
  return (
    <div className='cargo-table'>
     <table className='table table-bordered'>
      <HeaderTable/>
      <tbody>
        {cargoList.map((el, index) => <RenderString key={index} item={el}/>) }
      </tbody>
     </table>
    </div>
  )
}
