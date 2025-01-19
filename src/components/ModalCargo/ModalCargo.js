import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { nanoid } from "nanoid";

export default function ModalCargo({ show, toggle, cargo }) {
  function saveCargo(e) {
    const myForm = document.forms.addCargo.elements;
    const newCargo = {
      id: 'CARGO'+nanoid(5),
      name: myForm.name.value,
      status: 'Ожидает отправки',
      origin: myForm.origin.value,
      destination: myForm.destination.value,
      departureDate: myForm.departureDate.value,
    };
    cargo(newCargo);
    toggle();
  }
  return ReactDom.createPortal (
    <Modal show={show} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить груз</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="d-flex flex-column" name="addCargo" id='fco' onSubmit={saveCargo}>
          <label>Название груза</label>
          <input
            type="text"
            name="name"
            required
            placeholder="введите название груза"
          />
          <label>Пункт отправления</label>
          <input
            type="text"
            name="origin"
            required
            placeholder="введите путкт отправления"
          />
          <label>Пункт назначения</label>
          <input
            type="text"
            name="destination"
            required
            placeholder="введите пункт назначения"
          />
          <label>Дата отправления</label>
          <input
            type="text"
            name="departureDate"
            required
            placeholder="введите дату отправления в формате гггг-мм-чч"
          />  
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Закрыть
          </Button>
          <Button type="submit" form="fco" variant="primary">
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>,
    document.body
  );
}
