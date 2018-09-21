import React from 'react';
import { deleteProduct } from '../store';
import { connect } from 'react-redux';

const Product = ({ product, top = false, deleteProd }) => {
  return top ? (
    <div>
      {product.name} &nbsp;
      <button onClick={() => deleteProd(product)}>x</button>
    </div>
  ) : (
    <li>
      {product.name} {product.rating} &nbsp;
      <button onClick={() => deleteProd(product)}>x</button>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProd: prod => dispatch(deleteProduct(prod)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
