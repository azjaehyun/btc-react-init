import React, { useCallback, useEffect, useState } from 'react';

const CallBackMain = () => {
  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   console.log(`someFunc : number : ${number}`);
  //   // return;
  // };

  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
  }, [number]);

  useEffect(() => {
    console.log('somefuntion이 변경되었습니다');
  }, [someFunction]);

  return (
    <>
      <div>
        CallBackMain
        <input type="number" value={number} onChange={e => setNumber(e.target.value)}></input>
        <br />
        <button onClick={someFunction}>Call someFunction</button>
      </div>
    </>
  );
};

export default CallBackMain;
