import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import SelectStatusCargo from '../SelectStatusCargo/SelectStatusCargo';
import { Button } from 'react-bootstrap';
import ModalCargo from '../ModalCargo/ModalCargo';

export default function Header({transferCargo, transferSort}) {
  const [ show, setShow ] = useState(false);
  function handleShow() {setShow(true);}
  function handleHide() {setShow(false)};
  function getElement(newCargo) {transferCargo(newCargo)};
  function handlerForSort(num) {transferSort(num)};
  return (
    <header className=' header d-flex flex-wrap justify-content-around align-items-center'>
      <p className='h4 text-white'> Лист мониторинга грузов</p>
      <Button variant="info" onClick={handleShow}>
        Добавить груз
      </Button>
      <SelectStatusCargo forSort={handlerForSort}/>
      {show && <ModalCargo show={show} toggle={handleHide} cargo={getElement}/>}
    </header>
    
    
  )
}
