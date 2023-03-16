import React, { useEffect } from 'react';

const UseEffectMain = () => {
  useEffect(() => {
    // mount
    const timer = setInterval(() => {
      console.log('타이머 돌아가는중');
    }, 1000);

    //  mountDidmount
    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
    };
  });
  return <div>UseEffectMain 타이머를 시작합니다. f12를 눌러 콘솔을 봅시다!!</div>;
};

export default UseEffectMain;
