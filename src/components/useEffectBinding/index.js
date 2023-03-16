import React, { useEffect, useState } from 'react';

const useEffectBinding = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    console.log('count : ', count);
    setCount(count + 1);
  };
  const handleNameUpdate = e => {
    console.log('name : ', name);
    setName(e.target.value);
  };

  useEffect(() => {
    console.log('redering');
  });

  // useEffect(() => {
  //   console.log('redering');
  // },[]);

  // useEffect(() => {
  //   console.log('redering');
  // },[count]);
  return (
    <div>
      useEffectBinding <br />
      <button onClick={handleCountUpdate}>update</button>
      <br />
      <input type="text" value={name} onChange={handleNameUpdate}></input>
      <span>name:{name}</span>
    </div>
  );
};

export default useEffectBinding;
