import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalCargo({show, toggle}) {
  function saveCargo(e) {
    console.log('hellow');
    toggle();
  }
  return (
    <Modal show={show} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить груз</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='d-flex flex-column' name='addCargo'>
          <label>Название груза</label>
          <input type='text' name='cargoName' placeholder='введите название груза' />
          <label>Статус груза</label>
          <input type='text' name='cargoCount' placeholder='введите статус груза' />
          <label>Пункт отправления</label>
          <input type='text' name='cargoCount' placeholder='введите путкт отправления' />
          <label>Пункт назначения</label>
          <input type='text' name='cargoCount' placeholder='введите пункт назначения' />
          <label>Дата отправления</label>
          <input type='text' name='cargoCount' placeholder='введите дату отправления' />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={saveCargo}>
          Сохранить
        </Button>
      </Modal.Footer>
  </Modal>
  )
}

