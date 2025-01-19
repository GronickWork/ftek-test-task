import React, { useState } from 'react';
import { cargoList as  list} from '../utils/cargoList';
import { statuses } from '../utils/statuses';
import './containers.css';
import Header from '../Header/Header';
import RenderCargo from './RenderCargo/RenderCargo';

export default function Container() {
  const [ listCargo, setListCargo ] = useState({res: list});
  function handlerCargo(newCargo) {
    list.push(newCargo);
    setListCargo({res: list});
  }
  function sorting(num) {
    if(num === 0) return setListCargo({res: list});
    const res = list.filter(el => el.status === statuses[num]);
    setListCargo({res: res})
  };
  return (
    <main className='containers'>
      <div className='vail'>
        <Header transferCargo={handlerCargo} transferSort={sorting}/>
        <RenderCargo list={listCargo.res}/>
      </div>
    </main>
  )
}
