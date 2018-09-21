import React from 'react';
import { deleteProduct } from '../store';
import { connect } from 'react-redux';

const Product = ({ deleteProd, productId, products, history }) => {
  const product = products.filter(prod => prod.id === productId);

  return (
    <li>
      {product[0].name} {product[0].rating} &nbsp;
      <button
        onClick={() => {
          if (history) history.push('/products');
          return deleteProd(product[0]);
        }}
      >
        x
      </button>
    </li>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteProd: prod => dispatch(deleteProduct(prod)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
