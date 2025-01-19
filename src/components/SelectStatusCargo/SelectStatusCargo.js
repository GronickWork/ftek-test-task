import React, { useState } from 'react';
import clnm  from 'classnames';
import { colors } from '../utils/colors';
import { statuses } from '../utils/statuses';

export default function SelectStatusCargo({forSort}) {
  const [ bgColor, setBgColor ] = useState('bg-info');
  function handlerSelect(e) {
    const chosenNum = e.target.value * 1;
    setBgColor( 'bg-'+colors[chosenNum] );
    forSort(chosenNum);
  };
  return (
    <div className={clnm('form', 'text-white', bgColor)} onChange={handlerSelect}>
      <label className='select-label' htmlFor="selC">Фильтр по статусу груза</label> 
      <select className={clnm('form-select', 'text-white', bgColor)} id="selC">
        {statuses.map((el, index) => <option key={index} value={index}>{el}</option>)}
      </select> 
    </div>
  )
}
