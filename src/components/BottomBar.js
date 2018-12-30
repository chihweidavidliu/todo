import React from 'react';
import { connect } from 'react-redux';

class BottomBar extends React.Component {

  renderMessage = () => {
    let count = this.props.todos.length;

    if(count === 0) {
      return "You have no todos"
    } else {
      return (
        <div>
          <p>Number of todos: {count}</p>
          <p>Click to Edit. Drag to reorder</p>
        </div>
      )
    }
  }
  render() {
    return <div className = "bottom-bar ui container">{this.renderMessage()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}
export default connect(mapStateToProps) (BottomBar);
