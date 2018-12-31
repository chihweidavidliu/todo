import React from 'react';
import { connect } from 'react-redux';
import { clearAll } from '../actions';
import { triggerScale, reverseScale } from '../actions';

class DeleteAll extends React.Component {
  onClick = () => {
    let { clearAll, triggerScale } = this.props;
    clearAll();
    triggerScale();
  }

  onTransitionEnd = () => {
    let { reverseScale } = this.props;
    reverseScale();
  }

  render() {
    return (
      <button
        className="deleteAll compact ui button"
        type="button"
        onClick={this.onClick}
        onTransitionEnd={this.handleTransitionEnd}
      >
        Delete All
        <i className="trash alternate outline icon"></i>
      </button>)
  }
};

export default connect(null, {clearAll: clearAll, triggerScale: triggerScale, reverseScale: reverseScale}) (DeleteAll)
