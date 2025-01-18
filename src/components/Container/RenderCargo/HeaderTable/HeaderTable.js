import React from 'react'

export default function HeaderTable() {
  const graphs = ['Номер груза', 'Название груза', 'Статус груза', 'Пункт отправления', 'Пункт назначения','Дата отправки',];
  return (
    <thead>
      <tr>
        {graphs.map((el, index) => <th key={index} scope='col'>{el}</th>)}
      </tr> 
    </thead>
  )
}
