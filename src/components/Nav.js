import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ products }) => {
  const topRatedProd = products.slice(0);
  topRatedProd.sort((a, b) => b.rating - a.rating);
  const topRatedProdObj = topRatedProd[0];

  return (
    <div>
      <div>
        <h1> Acme Products </h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/products">Products ({products.length}) </Link>
          </li>
          <li>
            <Link to={topRatedProdObj ? `/products/${topRatedProdObj.id}` : ''}>
              Top Rated ({topRatedProdObj ? topRatedProdObj.name : ''})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products, topProduct }) => {
  return { products, topProduct };
};

export default connect(mapStateToProps)(Nav);
