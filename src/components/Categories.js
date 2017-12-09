import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Categories = ({ category }) => (
  <div>
    <div>List of categories</div>
    { category && `Selected: ${category}`}
  </div>
);

Categories.propTypes = {
  category: PropTypes.string
};

export default Categories;