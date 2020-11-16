/*
This is a functional component which shows a order summary for the user.
*/
import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummaryEl = Object.keys(props.ingredients)
        .map((igKey, index) => {
            return (
                <li key={index}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            )
        });

    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummaryEl}
            </ul>
            <p style={{ textAlign: 'center' }}> Final Cost : <strong>&#8377; {props.cost}</strong> </p>
            <p style={{ textAlign: 'center' }}> Continue to checkout? </p>

            <h3> Total Amount: <strong>{props.total}</strong></h3>

            <Button btnType="Danger" clicked={props.purchaseCancelled}> Cancel </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}> Continue </Button>
        </Aux>
    );
}

export default OrderSummary;