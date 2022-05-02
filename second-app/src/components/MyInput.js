import PropTypes from "prop-types";
import React, { Component } from "react";

import React from "react";

export const MyInput = (props) => {
  const { type, label, name, value, className } = props;
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className={className}
      ></input>
    </div>
  );
};

MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
};
export default MyInput;
