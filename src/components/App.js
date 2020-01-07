import React from 'react';
import Sidearea from './sideArea';
import Mainarea from './mainArea';

function Todo() {
  return (
    <div className='wrap'>
      <Sidearea />
      <Mainarea />
    </div>
  );
}

export default Todo;