import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const {
      categories,
      category,
    } = this.props;

    return (
      <ul className="categoriesList">
        { categories.map(cat => (
          <li key={ cat.name } className={cat.name === category ? 'active' : ''}>
            <Link to={ cat.path } >{ cat.name }</Link>
          </li>
        )) }
      </ul>
    )
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  category: PropTypes.string
};

export default Categories;