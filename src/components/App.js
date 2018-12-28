import React from 'react';
import './App.css';
import FormInput from './FormInput';
import TodoListContainer from './TodoListContainer';

const App = (props) => {
  return (
    <div id="main" className="ui container">
      <h1>My To-Dos</h1>
      <FormInput />
      <TodoListContainer />
    </div>
  )
}

export default App;
