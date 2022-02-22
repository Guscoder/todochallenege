import React from 'react';
import '../styles/ListFilterTabs.scss';
const ListFilterTabs = ({
  showAllTodos,
  showIncompleteTodos,
  showCompletedTodos,
}) => {
  const removeActive = (e) => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
  };
  return (
    <div className='filter-tabs'>
      <span
        className='active'
        onClick={(e) => {
          showAllTodos();
          removeActive(e);
        }}
      >
        All{' '}
      </span>
      <span
        className='inactive'
        onClick={(e) => {
          showIncompleteTodos();
          removeActive(e);
        }}
      >
        Active{' '}
      </span>
      <span
        className='inactive'
        onClick={(e) => {
          showCompletedTodos();
          removeActive(e);
        }}
      >
        Completed{' '}
      </span>
    </div>
  );
};

export default ListFilterTabs;
