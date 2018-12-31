import React from 'react';
import { connect } from 'react-redux';
import { reverseScale } from '../actions';

class BottomBar extends React.Component {

  handleTransitionEnd = () => {
    this.props.reverseScale(); // on transitionEnd reverse the scale using action creator
  }

  renderMessage = () => {
    let count = this.props.todos.length;
    let divClass;
    if (this.props.scale === true) {
      divClass = "transition scale"
    } else {
      divClass = "transition";
    }

    if(count === 0) {
      return <div
        className={divClass}
        onTransitionEnd={this.handleTransitionEnd}
        >
        <p>You have no todos</p>
      </div>
    } else {
      return (
        <div
          className={divClass}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <p>Number of todos: {count}</p>
          <p>Click to Edit. Drag to reorder</p>
        </div>
      )
    }
  }

  render() {
    return <div className="bottom-bar">{this.renderMessage()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    scale: state.scale,
  }
}
export default connect(mapStateToProps, {reverseScale: reverseScale}) (BottomBar);
