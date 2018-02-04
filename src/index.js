import './index.css';
import './screens/todolist/TodoList.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./screens/todolist/TodoList";
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
ReactDOM.render(
  <TodoList />,
  document.getElementById('container')
);
