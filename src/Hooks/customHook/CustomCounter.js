// CounterComponent.js
import React from 'react';
import UseCounter from './UseCounter';

const CounterComponent = () => {
  const { count, increment, decrement } = UseCounter(0, 1);
//   console.log(count)

  return (
    <div>
      <p>Count: {count}</p>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
      <button className='btn btn-danger' onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
