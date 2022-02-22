import React from 'react';
import SingleTodo from './SingleTodo';
import OptionsPanel from './OptionsPanel';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import '../styles/TodoList.scss';

const TodoList = ({
  todolist,
  setTodoList,
  setActiveCount,
  activeCount,
  currentDisplayList,
  setCurrentDisplayList,
  mQuery,
}) => {
  const handleOnDragEnd = (result) => {
    const items = Array.from(todolist);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCurrentDisplayList(items);
    setTodoList(items);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='todos'>
        {(provided) => (
          <ul
            className='todolist todos'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {currentDisplayList.map((todo, index) => (
              <SingleTodo
                key={todo.id}
                index={index}
                todoItem={todo}
                setTodoList={setTodoList}
                todolist={todolist}
                setActiveCount={setActiveCount}
                activeCount={activeCount}
                setCurrentDisplayList={setCurrentDisplayList}
              />
            ))}
            <OptionsPanel
              todolist={todolist}
              activeCount={activeCount}
              setCurrentDisplayList={setCurrentDisplayList}
              setTodoList={setTodoList}
              mQuery={mQuery}
            />
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
