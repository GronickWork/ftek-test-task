import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import SelectStatusCargo from '../SelectStatusCargo/SelectStatusCargo';

export default function Header() {
  return (
    <header className=' header d-flex flex-wrap justify-content-around align-items-center'>
      <p className='h4 text-white'> Лист мониторинга грузов</p>
      <button type='button' className='btn btn-info text-white'>Добавить груз</button>
      <SelectStatusCargo/>
    </header>
    
  )
}
