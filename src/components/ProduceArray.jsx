import React from 'react';
import PropTypes from 'prop-types';

function ProduceArray(props){
  return (
    <li>{props.listItems}</li>
  );
}

ProduceArray.propTypes = {
  listItems: PropTypes.string
};

export default ProduceArray;
