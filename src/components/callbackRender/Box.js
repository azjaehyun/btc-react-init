import React, { useEffect, useState } from 'react';

const Box = ({ toogleStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log('chage Box!!');
    setStyle(toogleStyle());
  }, [toogleStyle]);
  return <div style={style}></div>;
};

export default Box;
