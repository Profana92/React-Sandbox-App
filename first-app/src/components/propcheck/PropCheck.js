import React from "react";
import PropTypes from "prop-types";
function PropCheck(props) {
  return <h1>You are {props.age} </h1>;
}
PropCheck.propTypes = {
  age: PropTypes.number.isRequired,
};
PropCheck.defaultProps = {
  age: 20,
};
export default PropCheck;
