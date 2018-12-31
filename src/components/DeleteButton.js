import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';
import { triggerScale, reverseScale } from '../actions';

class DeleteButton extends Component {
  handleClick = () => {
    let { id, deleteTodo, triggerScale } = this.props;
    deleteTodo(id);
    triggerScale(); // trigger scaling of bottom bar on click
  }

  handleTransitionEnd = () => {
    let { reverseScale } = this.props;
    reverseScale();
  }

  render() {
    return (
      <button aria-label="deleteTodo" title="delete">
        <i className="white close icon deleteButton" onClick={this.handleClick} onTransitionEnd={this.handleTransitionEnd}></i>
      </button>
    )
  }
}
// define a new action creator to pass to this component
export default connect(null,
  {deleteTodo: deleteTodo,
   triggerScale: triggerScale,
   reverseScale: reverseScale}) (DeleteButton);
