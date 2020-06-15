import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { currencyList, getConversionValue } from '../actions/currencyActions';
import { FROM_CURRENCY, TO_CURRENCY, AMOUNT } from '../Constants';

export class InputForm extends Component {

  state = {
    [FROM_CURRENCY]: '',
    [TO_CURRENCY]: '',
    [AMOUNT]: 1
  }

  componentDidMount() {
    this.props.currencyList();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.countryList !== this.props.countryList) {
      const defaultValueInSelect = Object.keys(this.props.countryList)[0];
      this.setState({
        [FROM_CURRENCY]: defaultValueInSelect,
        [TO_CURRENCY]: defaultValueInSelect
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, fromCurrency, toCurrency } = this.state;
    this.props.getConversionValue(amount, fromCurrency, toCurrency);
  }

  onValueChange = (e, selectName) => {
    let value = e.target.value;
    if ((selectName === AMOUNT) && value === 0) value = 1;
    this.setState({
      [selectName]: value
    });
  }

  getCountryNames = () => {
    const countryList = this.props.countryList;
    return Object.entries(countryList)
        .map(([key, value]) => <option key={key} value={key}>{key} - {value}</option>);
  }

  render() {
    const { amount } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Form.Group as={Row} controlId="formAmount">
          <Form.Label column sm={2}>
            Amount
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" value={amount} onChange={(e) => this.onValueChange(e, AMOUNT)} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formCurrencyInput">
          <Form.Label column sm="2">From Currency</Form.Label>
          <Col>
            <Form.Control as="select" sm="10" onChange={(e) => this.onValueChange(e, FROM_CURRENCY)}>
              {this.getCountryNames()}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="toCurrencyInput">
          <Form.Label column sm="2">To Currency</Form.Label>
          <Col>
            <Form.Control as="select" sm="10" onChange={(e) => this.onValueChange(e, TO_CURRENCY)}>
              {this.getCountryNames()}
            </Form.Control>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">Convert</Button>
      </form>
    )
  }
}

export default connect(
    state => ({
      countryList: state.currencies.countryList
  }),
  {
    currencyList,
    getConversionValue
  }
)(InputForm);