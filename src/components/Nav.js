import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Product from './Product';

const Nav = ({ products }) => {
  const topRated = () => '/products/1';
  // let prodsByRating = products.slice(0);
  // const getMaxRating = () =>
  //   products.reduce((max, p) => (p.rating > max ? p.y : max), products[0]);

  // console.log(JSON.parse(JSON.stringify(getMaxRating())));

  return (
    <ul>
      <li>
        <Link to="/products">Products ({products.length}) </Link>
      </li>
      <li>Top Rated</li>
      {/* <li>
        <Link to={topRated}>Top Rated </Link>
      </li> */}
      {/* <li> Top Rated </li> */}
    </ul>
  );
};

const mapStateToProps = ({ products }) => {
  return { products };
};
export default connect(mapStateToProps)(Nav);
