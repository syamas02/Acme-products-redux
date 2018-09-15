import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import store, { createProduct } from '../store';
import faker from 'faker';

const ProductList = ({ products }) => (
  <ul>
    <button
      onClick={() =>
        store.dispatch(
          createProduct({
            id: faker.random.number(1000),
            name: faker.commerce.productName(),
            rating: faker.random.number(30),
          })
        )
      }
    >
      Create a product
    </button>
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </ul>
);

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(mapStateToProps)(ProductList);
