import React from "react";
import "./styles.css";
import PropTypes from 'prop-types';

const BlackButton = ({ label, action }) => {
  return (
    <button type="button" className="black-btn" onClick={action}>
      {label}
    </button>
  );
};

BlackButton.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default BlackButton;