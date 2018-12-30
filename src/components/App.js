import React from 'react';
import './App.css';
import FormInput from './FormInput';
import TodoListContainer from './TodoListContainer';
import DeleteAll from './DeleteAll';

const App = (props) => {
  return (
    <div id="main" className="ui container">
      <h1>My To-Dos</h1>

      <div className="topbar">
        <h3>Enter todo:</h3>
        <DeleteAll />
      </div>
      <FormInput />
      <TodoListContainer />
    </div>
  )
}

export default App;
