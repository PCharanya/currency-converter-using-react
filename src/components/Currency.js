import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

export const Currency = ({currencyValue}) => {

    return (
        <div className="mt-5">
            <Card>
                <Card.Header>
                    {currencyValue.amount} {currencyValue.base} =
                </Card.Header>
                <Card.Body>
                    <p>
                        <span className="currency-font">{Object.values(currencyValue.rates)[0]}</span>
                        <small>{Object.keys(currencyValue.rates)[0]}</small>
                    </p>
                </Card.Body>
                <Card.Footer>Last Updated on {currencyValue.date}</Card.Footer>
            </Card>
        </div>
    );
}

export default connect(
    state => ({
        currencyValue: state.currencies.currencyValue
    }),
    null
)(Currency);