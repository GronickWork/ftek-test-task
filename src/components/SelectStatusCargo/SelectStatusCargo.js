import React, { useState } from 'react';
import clnm  from 'classnames';
import { colors } from '../utils/colors';

export default function SelectStatusCargo() {
  //const colors = ['bg-info', 'bg-warning', 'bg-primary', 'bg-success', ];
  const [ bgColor, setBgColor ] = useState('bg-info');
  function handlerSelect(e) {
    const chosenNum = e.target.value * 1;
    setBgColor( 'bg-'+colors[chosenNum] );
  };
  return (
    <div className={clnm('form', 'text-white', bgColor)} onChange={handlerSelect}>
      <label className='select-label' htmlFor="selC">Фильтр по статусу груза</label> 
      <select className={clnm('form-select', 'text-white', bgColor)} id="selC">
        <option value="0">Показать всё</option>
        <option value="1">Ожидает отправки</option>
        <option value="2">В пути</option>
        <option value="3">Доставлен</option>
      </select> 
    </div>
  )
}
