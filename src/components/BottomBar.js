import React from 'react';
import { connect } from 'react-redux';

class BottomBar extends React.Component {

  render() {
    let count = this.props.todos.length;
    return (
      <div className="bottom-bar">Number of todos: {count}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}
export default connect(mapStateToProps) (BottomBar);
