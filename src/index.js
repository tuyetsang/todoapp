import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList";
import './TodoList.css';


import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
ReactDOM.render(
  <TodoList />,
  document.getElementById('container')
);
