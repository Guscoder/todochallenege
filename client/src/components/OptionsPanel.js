import React from 'react';
import ApiClient from '../lib/ApiClient';
import '../styles/OptionsPanel.scss';
import ListFilterTabs from './ListFilterTabs';

const OptionsPanel = ({
  activeCount,
  setCurrentDisplayList,
  todolist,
  setTodoList,
  mQuery,
  showAllTodos,
  showIncompleteTodos,
  showCompletedTodos,
}) => {
  const clearCompletedTodos = async () => {
    await ApiClient.deleteCompletedTodos();
    let incompleteList = todolist.filter((todo) => !todo.isComplete);
    setTodoList([...incompleteList]);
    setCurrentDisplayList([...incompleteList]);
  };
  return (
    <li className='options_panel'>
      <span>{activeCount} items left</span>
      {mQuery ? null : (
        <ListFilterTabs
          showAllTodos={showAllTodos}
          showIncompleteTodos={showIncompleteTodos}
          showCompletedTodos={showCompletedTodos}
        />
      )}

      <span onClick={clearCompletedTodos}>Clear Completed</span>
    </li>
  );
};

export default OptionsPanel;
