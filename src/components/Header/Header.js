import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import SelectStatusCargo from '../SelectStatusCargo/SelectStatusCargo';
import { Button } from 'react-bootstrap';
import ModalCargo from '../Modal/Modal';

export default function Header() {
  const [ show, setShow ] = useState(false);
  function handleShow() {setShow(true);}
  function handleHide() {setShow(false);};
  return (
    <header className=' header d-flex flex-wrap justify-content-around align-items-center'>
      <p className='h4 text-white'> Лист мониторинга грузов</p>
      <Button variant="info" onClick={handleShow}>
        Добавить груз
      </Button>
      <SelectStatusCargo/>
      {show && <ModalCargo show={show} toggle={handleHide}/>}
    </header>
    
    
  )
}
