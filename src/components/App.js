import React from 'react';
import './App.css';
import FormInput from './FormInput';
import TodoListContainer from './TodoListContainer';
import DeleteAll from './DeleteAll';
import BottomBar from './BottomBar';
import DateAndTime from './DateAndTime';
import PDFButton from './PDFButton';

const App = (props) => {
  return (
    <div id="main" className="ui container">
      <DateAndTime />
      <PDFButton />
      <h1>My To-Dos</h1>
      <div className="topbar">
        <h3>Enter todo:</h3>
        <DeleteAll />
      </div>
      <FormInput />
      <TodoListContainer />
      <BottomBar />
    </div>
  )
}

export default App;
