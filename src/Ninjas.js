import React from 'react';

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map((ninja, i) => {
    if (ninja.age > 20) {
      return (
        <li className='ninja' key={ninja.id}>
          {`Name: ${ninja.name}`}
          <br />
          <br />
          {`index position is:  ${i.toString()}`}
          <br />
          <br />
          {`Age: ${ninja.age}`}
          <br />
          <br />
          {`Belt: ${ninja.belt}`}
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
