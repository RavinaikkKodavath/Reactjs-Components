import React, { useReducer } from 'react';

let initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'join':
      return { count: state.count + 1 };
    case 'exit':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleJoin() {
    dispatch({ type: 'join' });
  }

  function handleExit() {
    dispatch({ type: 'exit' });
  }

  return (
    <div className='container-fluid'>
      <div className='bg-dark text-white p-5'>Live streaming {state.count}</div>
      <div>
        <button onClick={handleJoin} className='btn btn-primary'>
          Join
        </button>
      </div>
      <div>
        <button onClick={handleExit} className='btn btn-danger'>
          Exit
        </button>
      </div>
    </div>
  );
}
