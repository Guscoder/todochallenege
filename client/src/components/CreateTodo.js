import React, { useState } from 'react';
import '../styles/CreateTodo.scss';
import ApiClient from '../lib/ApiClient';

const CreateTodo = ({
  setTodoList,
  setActiveCount,
  activeCount,
  setCurrentDisplayList,
}) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitTodo = async () => {
    // add new task to DB
    let newTodoList = await ApiClient.createTodo(input);
    console.log(newTodoList);
    // update state list
    setTodoList(newTodoList);
    setCurrentDisplayList(newTodoList);
    // increase active count
    setActiveCount(activeCount + 1);
    // clear input
    setInput('');
  };

  return (
    <div className='input-div'>
      <span className='input-check-circle' onClick={handleSubmitTodo}></span>
      <input
        type='text'
        onChange={handleInputChange}
        value={input}
        placeholder='Create a todo...'
      />
    </div>
  );
};

export default CreateTodo;
