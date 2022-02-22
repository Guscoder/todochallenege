import { useState } from 'react';
import TodoPanel from './components/TodoPanel';
import './styles/App.scss';

function App() {
  const [themeStyle, setThemeStyle] = useState('App light-theme');

  return (
    <div className={themeStyle}>
      <div className='header-image'></div>
      <TodoPanel themeStyle={themeStyle} setThemeStyle={setThemeStyle} />
    </div>
  );
}

export default App;
