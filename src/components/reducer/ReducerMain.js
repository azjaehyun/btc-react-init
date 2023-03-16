import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  console.log('reducer 너 일하자!!!', state, action);
  switch (action.type) {
    case 'deposit':
      return state + action.payLoad;
    case 'withdraw':
      return state - action.payLoad;
    default:
      return state;
  }
};

const ReducerMain = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>
        <h2>useReducer Practice 오신걸 환영합니다!</h2>
        <p>잔고 : {money}</p>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} step="1000"></input>

        <button
          onClick={() => {
            dispatch({ type: 'deposit', payLoad: number });
          }}
        >
          예금
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'withdraw', payLoad: number });
          }}
        >
          출금
        </button>

        <button
          onClick={() => {
            dispatch({ type: 'alkdfjalkfjlak', payLoad: number });
          }}
        >
          복리!!
        </button>
      </div>
    </>
  );
};

export default ReducerMain;
