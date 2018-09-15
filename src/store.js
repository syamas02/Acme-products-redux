import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';

const _loadProducts = products => {
  return {
    products,
    type: LOAD_PRODUCTS,
  };
};

const loadProducts = () => {
  return dispatch =>
    axios
      .get('/api/products')
      .then(response => response.data)
      .then(products => dispatch(_loadProducts(products)));
};

const _deleteProduct = product => {
  return {
    product,
    type: DELETE_PRODUCT,
  };
};
const deleteProduct = product => {
  return dispatch =>
    axios
      .delete(`/api/products/${product.id}`)
      .then(() => dispatch(_deleteProduct(product)));
};

const _createProduct = product => ({
  product,
  type: CREATE_PRODUCT,
});

const createProduct = product => {
  return dispatch =>
    axios
      .post('/api/products', product)

      .then(() => dispatch(_createProduct(product)));
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      state = action.products;
      break;
    case DELETE_PRODUCT:
      state = state.filter(product => product.id !== action.product.id);
      break;
    case CREATE_PRODUCT:
      state = [...state, action.product];
      break;
  }
  return state;
};

const reducer = combineReducers({
  products: productsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export { loadProducts, deleteProduct, createProduct };
