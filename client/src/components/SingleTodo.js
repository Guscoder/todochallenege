import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import '../styles/SingleTodo.scss';
import ApiClient from '../lib/ApiClient';

const SingleTodo = ({
  index,
  todoItem,
  todolist,
  setTodoList,
  activeCount,
  setActiveCount,
  setCurrentDisplayList,
}) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (todoItem.isComplete) setIsComplete(true);
  }, [todoItem.isComplete]);

  const changeListItemStatus = () => {
    let todoIndex = todolist.findIndex(
      (todo) => todo.id === Number(todoItem.id)
    );
    let list = [...todolist];
    list[todoIndex].isComplete
      ? (list[todoIndex].isComplete = false)
      : (list[todoIndex].isComplete = true);
    console.log(list);
    setTodoList(list);
    setCurrentDisplayList(list);
  };

  const handleCompleteStatus = async () => {
    if (todoItem.isComplete) {
      setIsComplete(false);
      // set isComplete in DB
      await ApiClient.changeCompletedStatus(todoItem.id);
      setActiveCount(activeCount + 1);
      changeListItemStatus();
    } else {
      setIsComplete(true);
      // set isComplete in DB
      await ApiClient.changeCompletedStatus(todoItem.id);
      setActiveCount(activeCount - 1);
      changeListItemStatus();
    }
  };
  const handleDelete = async () => {
    let itemCompletionStatus = todoItem.isComplete;
    let status = await ApiClient.deleteTodo(todoItem.id);
    console.log(status);
    // update state
    if (status === 204) {
      let newList = todolist.filter((todo) => todo.id !== todoItem.id);
      console.log(newList);
      setTodoList(newList);
      setCurrentDisplayList(newList);
      if (!itemCompletionStatus) setActiveCount(activeCount - 1);
    }
  };

  return (
    <Draggable
      key={String(todoItem.id)}
      draggableId={String(todoItem.id)}
      index={index}
    >
      {(provided) => (
        <li
          className='single_todo'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='task-div'>
            <span
              className={
                isComplete ? 'check_circle circle_completed' : 'check_circle'
              }
              onClick={handleCompleteStatus}
            >
              <span className={isComplete ? 'checked' : 'unchecked'}>
                &#10003;
              </span>
            </span>
            <span
              className={
                isComplete ? 'todo_itemname todo_completed' : 'todo_itemname'
              }
            >
              {todoItem.task}
            </span>
          </div>
          <span className='delete-button' onClick={handleDelete}>
            X
          </span>
        </li>
      )}
    </Draggable>
  );
};

export default SingleTodo;
