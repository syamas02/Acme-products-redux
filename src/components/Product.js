import React from 'react';
import store, { deleteProduct } from '../store';

const Product = ({ product, top = false }) => {
  return top ? (
    <div>
      {product.name} &nbsp;
      <button onClick={() => store.dispatch(deleteProduct(product))}>x</button>
    </div>
  ) : (
    <li>
      {product.name} {product.rating} &nbsp;
      <button onClick={() => store.dispatch(deleteProduct(product))}>x</button>
    </li>
  );
};

export default Product;
