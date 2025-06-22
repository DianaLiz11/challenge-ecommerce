import React from "react";
import "./styles.css";
import PropTypes from 'prop-types';

const CategoryCard = ({ imgurl, title }) => {
  return (
    <div className="container">
      <img src={imgurl} alt="logo" className="image" />
      <p className="title">{title}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  imgurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CategoryCard;