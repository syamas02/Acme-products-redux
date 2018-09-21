import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ products, topProduct }) => {
  return (
    <div>
      <h1> Acme Products </h1>
      <ul>
        <li>
          <Link to="/products">Products ({products.length}) </Link>
        </li>
        <li>
          <Link to={`/products/${topProduct.id}`}>
            Top Rated ({topProduct.name})
          </Link>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ products, topProduct }) => {
  return { products, topProduct };
};

export default connect(mapStateToProps)(Nav);
