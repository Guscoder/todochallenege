import React, { useState } from 'react';
import '../styles/TodolistTitle.scss';
import { ReactComponent as SunIcon } from '../images/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../images/icon-moon.svg';

const TodoListTitle = ({ themeStyle, setThemeStyle }) => {
  const [toggleTheme, setToggleTheme] = useState(true);
  const handleChangeTheme = () => {
    toggleTheme
      ? setThemeStyle('App dark-theme')
      : setThemeStyle('App light-theme');
    setToggleTheme(!toggleTheme);
  };
  return (
    <div className='todolist_title'>
      <h1>TODO</h1>
      <span onClick={handleChangeTheme}>
        {toggleTheme ? <SunIcon /> : <MoonIcon />}
      </span>
    </div>
  );
};

export default TodoListTitle;
