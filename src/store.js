import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
// const TOP_RATING_PRODUCT = 'TOP_RATING_PRODUCT';

// const _topRatingProduct = product => {
//   return {
//     product,
//     type: TOP_RATING_PRODUCT,
//   };
// };

// const topRatingProduct = () => {
//   return dispatch =>
//     axios
//       .get('/api/products/toprating')
//       .then(response => response.data)
//       .then(product => dispatch(_topRatingProduct(product)));
// };

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
  // .then(() => dispatch(topRatingProduct()));
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
  // .then(() => dispatch(topRatingProduct()));
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
    // return action.products; //(work also)
    case DELETE_PRODUCT:
      state = state.filter(product => product.id !== action.product.id);
      break;
    case CREATE_PRODUCT:
      state = [...state, action.product];
      break;
    default:
      return state;
  }
  return state;
};

// const ratingReducer = (state = {}, action) => {
//   switch (action.type) {
//     case TOP_RATING_PRODUCT: {
//       state = action.product;
//       break;
//     }
//     default:
//       return state;
//   }
//   return state;
// };

const reducer = combineReducers({
  products: productsReducer,
  // topProduct: ratingReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
export { loadProducts, deleteProduct, createProduct };
