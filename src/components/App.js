import React, { Component } from 'react';
import Nav from './Nav';
import store, { loadProducts } from '../store';
import { HashRouter as Router, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadProducts());
  }

  render() {
    const renderNav = () => <Nav />;
    const renderProductList = () => <ProductList />;
    const renderProduct = () => <Product />;

    return (
      <Router>
        <div>
          <Route render={renderNav} />
          <Route path="/products" render={renderProductList} />
          <Route path="/products/:id" render={renderProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
