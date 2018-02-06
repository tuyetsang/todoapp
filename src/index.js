import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./screens/TodoList/TodoList";
import './screens/TodoList/TodoList.css';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();
ReactDOM.render(
  <TodoList />,
  document.getElementById('container')
);
