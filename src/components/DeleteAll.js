import React from 'react';
import { connect } from 'react-redux';
import { clearAll } from '../actions';

class DeleteAll extends React.Component {
  onClick = () => {
    let { clearAll } = this.props;
    clearAll();
  }

  render() {
    return (
      <button className="deleteAll compact ui button" type="button" onClick={this.onClick}>
        Delete All
        <i className="trash alternate outline icon"></i>
      </button>)
  }
};

export default connect(null, {clearAll: clearAll}) (DeleteAll)
