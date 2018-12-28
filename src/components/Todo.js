import React from 'react';
import DeleteButton from './DeleteButton';
import { SortableElement } from 'react-sortable-hoc';

// define a component that is a sortable element using react-sortables SortableElement function
// pass id to DeleteButton so that when delete butotn is clicked, it has the id of the todo and can delete the appropriate one from the state
const Todo = SortableElement(props => {
  return (
    <div className="item" data-id={props.todo.id}>
       <div className="content">
        <i className="white right triangle icon"></i>
        <div className="header">{props.todo.todo}</div>
      </div>
      <DeleteButton id={props.todo.id}/>
    </div>
  )
})

export default Todo
