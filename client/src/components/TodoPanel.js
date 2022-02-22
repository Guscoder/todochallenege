import React, { useState, useEffect } from 'react';
import TodoListTitle from './TodoListTitle';
import '../styles/TodoPanel.scss';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import ApiClient from '../lib/ApiClient';
import MobileOptions from './MobileOptions';

const TodoPanel = ({ themeStyle, setThemeStyle }) => {
  const [todolist, setTodoList] = useState([]);
  const [activeCount, setActiveCount] = useState(0);
  const [currentDisplayList, setCurrentDisplayList] = useState([]);
  const [mQuery, setMQuery] = useState(window.innerWidth < 990 ? true : false);

  useEffect(() => {
    const getTodos = async () => {
      let list = await ApiClient.getTodoList();
      console.log(list);
      setTodoList(list);
      setCurrentDisplayList(list);
      setActiveCount(list.filter((todo) => !todo.isComplete).length);
    };
    getTodos();
  }, []);
  const showIncompleteTodos = () => {
    let incompleteList = todolist.filter((todo) => !todo.isComplete);
    setCurrentDisplayList(incompleteList);
  };

  const showCompletedTodos = () => {
    let completedList = todolist.filter((todo) => todo.isComplete);
    setCurrentDisplayList(completedList);
  };

  const showAllTodos = () => {
    setCurrentDisplayList(todolist);
  };
  return (
    <div className='todopanel'>
      <TodoListTitle themeStyle={themeStyle} setThemeStyle={setThemeStyle} />
      <CreateTodo
        setTodoList={setTodoList}
        todolist={todolist}
        setActiveCount={setActiveCount}
        activeCount={activeCount}
        setCurrentDisplayList={setCurrentDisplayList}
      />
      <TodoList
        setTodoList={setTodoList}
        todolist={todolist}
        activeCount={activeCount}
        setActiveCount={setActiveCount}
        currentDisplayList={currentDisplayList}
        setCurrentDisplayList={setCurrentDisplayList}
        mQuery={mQuery}
        showAllTodos={showAllTodos}
        showIncompleteTodos={showIncompleteTodos}
        showCompletedTodos={showCompletedTodos}
      />
      {mQuery ? (
        <MobileOptions
          showAllTodos={showAllTodos}
          showIncompleteTodos={showIncompleteTodos}
          showCompletedTodos={showCompletedTodos}
        />
      ) : null}
      <p>Drag and Drop to reorder list</p>
    </div>
  );
};

export default TodoPanel;
