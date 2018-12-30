import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { SortableElement } from 'react-sortable-hoc';

// define a component that is a sortable element using react-sortables SortableElement function
// pass id to DeleteButton so that when delete butotn is clicked, it has the id of the todo and can delete the appropriate one from the state
const Todo = SortableElement(props => {
  let { id, todo } = props.todo
  return (
    <div className="item" data-id={id}>
       <div className="content">
        <i className="white right triangle icon"></i>
        <div className="header">{todo}</div>
      </div>
      <div>
        <EditButton />
        <DeleteButton id={id}/>
      </div>
    </div>
  )
})

export default Todo
