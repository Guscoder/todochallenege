import React from 'react';
import ListFilterTabs from './ListFilterTabs';
import '../styles/MobileOptions.scss';

const MobileOptions = ({
  showAllTodos,
  showIncompleteTodos,
  showCompletedTodos,
}) => {
  return (
    <div className='mobile-options-div'>
      <ListFilterTabs
        showAllTodos={showAllTodos}
        showIncompleteTodos={showIncompleteTodos}
        showCompletedTodos={showCompletedTodos}
      />
    </div>
  );
};

export default MobileOptions;
