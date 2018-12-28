import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class DeleteButton extends Component {
  handleClick = () => {
    let { id, deleteTodo } = this.props;
    deleteTodo(id);
  };

  render() {
    return (
      <button alt="delete"><i className="white close icon deleteButton" onClick={this.handleClick}></i></button>
    )
  }
}
// define a new action creator to pass to this component
export default connect(null, {deleteTodo: deleteTodo}) (DeleteButton);
