import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InputForm from './InputForm';
import Currency from './Currency';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const { currencyValue } = this.props;
    return (
        <>
        <Header />
        <hr />
        <div className="container">
            <InputForm />
            {
                Object.keys(currencyValue.rates).length > 0
                ? <Currency />
                : null
            }
        </div>
        </>
    )
  }
}

export default connect(
    state => ({
        currencyValue: state.currencies.currencyValue
    }),
    null
)(App)
