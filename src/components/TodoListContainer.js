import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateTodoOrder } from '../actions';
import SortableList from './SortableList';

class TodoListContainer extends React.Component {
  // event handler from react-sortable - pass the oldIndex and newIndex
  // to the updateTodoOrder action creator, once it reaches the todoReducer call the arrayMove react-sortable function to update state
  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.updateTodoOrder(oldIndex, newIndex)
  };

  render() {
    return <SortableList onSortEnd={this.onSortEnd} />
  }
}

TodoListContainer.propTypes = {
  updateTodoOrder: PropTypes.func,
}

export default connect(null, {updateTodoOrder: updateTodoOrder}) (TodoListContainer)
