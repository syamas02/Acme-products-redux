import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { createProduct } from '../store';
import faker from 'faker';

const ProductList = ({ products, create }) => (
  <ul>
    <br />
    <div>
      <button onClick={() => create()}>Create a product</button>
    </div>
    <br />
    {products.map(product => (
      <Product key={product.id} productId={product.id} />
    ))}
  </ul>
);

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    create: () =>
      dispatch(
        createProduct({
          id: faker.random.number(1000),
          name: faker.commerce.productName(),
          rating: faker.random.number(30),
        })
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
