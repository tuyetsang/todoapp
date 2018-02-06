import './index.css';
import './screens/todolist/TodoList.css';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./screens/todolist/TodoList";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import todoApp from './reducers'
import { createStore } from 'redux'

let store = createStore(todoApp)

// registerServiceWorker();
ReactDOM.render(
  <Provider store={store}>  
    <TodoList />
  </Provider>,
  document.getElementById('container')
);
