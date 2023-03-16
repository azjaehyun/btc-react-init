import React from 'react';

const Colume = () => {
  const todoList = ['hi', 'hello', 'teacher', 'hihi'];
  return (
    <>
      {todoList.map((todo, index) => {
        <React.Fragment key={index}>
          <td>{todo}</td>
        </React.Fragment>;
      })}
    </>
  );
};

export default Colume;
