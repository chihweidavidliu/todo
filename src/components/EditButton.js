import React from 'react';
import { connect } from 'react-redux';

const EditButton = (props) => {

  return (
    <button className="edit"><i className="edit icon" title="edit"></i></button>
  )
}

export default connect(null) (EditButton);
