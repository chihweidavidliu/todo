import React from 'react';
import Todo from './Todo';
import { SortableContainer } from 'react-sortable-hoc';
import { connect } from 'react-redux';

// create a react-sortable container for the sortable elements
const SortableList = SortableContainer((props) => {
  return (
    <div id="todoList">
      {props.todos.map((item, index) => { // get todos from store
        return (<Todo todo={item} index={index} key={item.id} />)
      })}
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(SortableList)
