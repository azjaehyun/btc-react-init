import React, { useState, useRef, useContext } from 'react';

const RefPractice = () => {
  const refTest = useRef(0);
  const [rederer, setRenderer] = useState(0);
  let count = 0;

  const increateRef = () => {
    refTest.current = refTest.current + 1;
  };

  const increateState = () => {
    setRenderer(rederer + 1);
  };

  const increateLet = () => {
    console.log(count);
    count = count + 1;
  };
  return (
    <>
      <div>
        <div>rederer:{refTest.current}</div>
        <div>state:{rederer}</div>
        <div>let count:{count}</div>
        <button onClick={increateRef}>Ref</button>
        <button onClick={increateState}>State</button>
        <button onClick={increateLet}>let</button>
      </div>
    </>
  );
};

export default RefPractice;
