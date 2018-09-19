import React, { Component } from 'react';
import Nav from './Nav';
import store, { loadProducts } from '../store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadProducts());
  }

  render() {
    const { topProduct } = this.props;
    const renderNav = () => <Nav />;
    const renderProductList = () => <ProductList />;
    const renderTopRatingProduct = () => (
      <Product product={topProduct} top={true} />
    );

    return (
      <Router>
        <div>
          <Route render={renderNav} />
          <Switch>
            <Route path="/products/:id" render={renderTopRatingProduct} />
            <Route path="/products" render={renderProductList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ topProduct }) => {
  return {
    topProduct,
  };
};
export default connect(mapStateToProps)(App);
