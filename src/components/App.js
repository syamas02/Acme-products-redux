import React, { Component } from 'react';
import Nav from './Nav';
import { loadProducts } from '../store';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Product from './Product';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const renderNav = () => <Nav />;
    const renderProductList = () => <ProductList />;
    const renderTopRatingProduct = ({ match, history }) => (
      <Product productId={Number(match.params.id)} history={history} />
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

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(loadProducts()),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(App);
