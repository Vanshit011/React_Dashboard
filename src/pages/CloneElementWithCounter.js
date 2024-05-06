import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';


const CloneElementWithCounter = () => {
  const [clonedElements, setClonedElements] = useState([{ id: 0, value: 0 }]);

  const cloneElement = () => {
    const newClone = { id: clonedElements.length, value: 0 };
    setClonedElements(prevState => [...prevState, newClone]);
  };

  const incrementValue = (id) => {
    setClonedElements(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  const decrementValue = (id) => {
    setClonedElements(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, value: item.value - 1 } : item
      )
    );
  };

  return (
    <div className='cloneincrement'>
      <Sidebar />
      <button onClick={cloneElement}>Clone Element</button>
      {clonedElements.map(({ id, value }) => (
        <div key={id}>
          <button onClick={() => decrementValue(id)} style={{width: '100px',margin: '10px'}}>-</button>
          <span> {value} </span>
          <button onClick={() => incrementValue(id)} style={{width: '100px',margin: '10px'}}>+</button>
        </div>
      ))}
    </div>
  );
};

export default CloneElementWithCounter;
