import React from 'react';
import './containers.css';
import Header from '../Header/Header';
import RenderCargo from './RenderCargo/RenderCargo';
import Modal from '../Modal/Modal';

export default function Container() {
  return (
    <main className='containers'>
      <div className='vail'>
        <Header/>
        <RenderCargo/>
      </div>
    </main>
  )
}
