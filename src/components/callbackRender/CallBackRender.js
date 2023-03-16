import React, { useCallback, useEffect, useState } from 'react';

import Box from './Box';
const CallBackMain = () => {
  const [size, setSize] = useState(100);
  const [isToggle, setIsToggle] = useState(false);

  const toggleStyle = () => {
    return {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: 'pink',
    };
  };

  // const toggleStyle = useCallback(() => {
  //   return {
  //     width: `${size}px`,
  //     height: `${size}px`,
  //     backgroundColor: 'pink',
  //   };
  // }, [size]);

  return (
    <>
      <div
        style={{
          backgroundColor: isToggle ? 'black' : 'white',
        }}
      >
        <input type="number" value={size} onChange={e => setSize(e.target.value)}></input>
        <button onClick={() => setIsToggle(!isToggle)}>chage Theme</button>
        <Box toogleStyle={toggleStyle}></Box>
      </div>
    </>
  );
};

export default CallBackMain;
