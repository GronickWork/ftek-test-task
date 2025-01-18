import React from 'react';
import './stamp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Stamp({author, nameWork}) {
  return (
    <div className='stamp'>
      <div className='stamp_circ'>
        <div className='circ blink1'></div>
        <div className='circ blink2'></div>
        <div className='circ blink3'></div>
      </div>
      <div className='stamp_text'><p className='h6'>author: {author}</p><p className='h6'>{nameWork}</p></div>  
    </div>
  )
}

