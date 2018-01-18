import React from 'react';
import PropTypes from 'prop-types';

function Month(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <ol>{props.selection}</ol>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
};

export default Month;
