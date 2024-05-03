// useCounter.js
import { useState } from 'react';

const UseCounter = (initialValue, step) => {
   
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    console.log(count)
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return {
    count,
    increment,
    decrement,
  };
};

export default UseCounter;
