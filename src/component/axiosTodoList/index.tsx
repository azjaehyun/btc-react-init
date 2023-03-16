import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { List } from 'react-virtualized';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import axios from 'axios';
import { AxiosData } from '../../type/AxiosData';

const TodoListMain = () => {
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then(response => console.log(response));
  // }, []);
  // const [posts, setPosts] = useState<AxiosData[]>([]);
  const [posts, setPosts] = useState<AxiosData[] | []>([]);
  const addPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      const data = response.json();

      data.then(newPosts => {
        setPosts([...posts, ...newPosts]);
      });
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
      const data = response.json();

      data.then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  // const rowRenderer = ({index}:AxiosData}) =>{
  //     return (
  //      <div>hi</div>
  //     );
  // }

  return (
    <div>
      <button onClick={addPosts}>add</button> <br />
      {posts.map((post, index) => (
        <>
          <br />
          <div key={index}>id : {post.id}</div>
          <div key={index}>title : {post.title}</div>
          <div key={index}>body : {post.body}</div>
          <br />
        </>
      ))}
    </div>
  );
};
export default React.memo(TodoListMain);
