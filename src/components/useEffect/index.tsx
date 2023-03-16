import React, { useState } from 'react';
import UseEffectMain from './UseEffectMain';

const UseEffectPractice = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      UseEffectPractice
      {showTimer && <UseEffectMain />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
};

export default UseEffectPractice;
