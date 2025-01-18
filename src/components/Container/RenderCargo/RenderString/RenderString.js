import React, { useState } from 'react';
import { colors } from '../../../utils/colors';
import clnm  from 'classnames';

export default function RenderString({ item }) {
  const [ bgColor, setBgColor ] = useState('table-warning');
  const selectStatus = (
    <td className={clnm('form', bgColor)} onChange={handlerSelect}>
      <select className={clnm('form-select', bgColor)}>
        <option defaultValue='1' value="1">Ожидает отправки</option>
        <option value="2">В пути</option>
        <option value="3">Доставлен</option>
      </select> 
    </td>
  );

  function handlerSelect(e) {
    const chosenNum = e.target.value * 1;
    setBgColor( 'table-'+colors[chosenNum] );
  };
  return (
    <tr className={bgColor}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      {selectStatus}
      <td>{item.origin}</td>
      <td>{item.destination}</td>
      <td>{item.departureDate}</td>
    </tr>
  )
}
