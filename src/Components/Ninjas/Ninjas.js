import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
  
  const ninjaList = ninjas.map((ninja, i) => {
    if (ninja.age > 20) {
      return (
        <li className='ninja' key={ninja.id}>
          {`Name: ${ninja.name}`}
          <br />
          <br />
          {`Ninja Number:  ${i.toString()}`}
          <br />
          <br />
          {`Age: ${ninja.age}`}
          <br />
          <br />
          {`Belt: ${ninja.belt}`}
          <br />
          <br />
          <button onClick={ () => {deleteNinja(ninja.id)} }>Delete Ninja</button>
          <br />
          <br />
        </li>
      );
    } else {
      return null;
    } 
  });
  return (
    <div className='ninja-list'>
      <ul>{ninjaList}</ul>
      
    </div>
  );
};

export default Ninjas;
