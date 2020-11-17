/*
This is a functional component which does Build controls
*/
import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import Checkbox from '../../UI/Checkbox/Checkbox';

const controls = [
    { label: 'Salad', type: 'salad', isVeg: true },
    { label: 'Meat', type: 'meat', isVeg: false },
    { label: 'Cheese', type: 'cheese', isVeg: true },
    { label: 'Bacon', type: 'bacon', isVeg: false },
]

const buildControls = (props) => {

    let modifiedControls = props.showVegOnly ?
        controls.filter(control => control.isVeg) :
        controls;

    return (
        <div className={styles.BuildControls}>
            <p>Price: <strong>&#8377; {props.price} </strong> </p>
            <Checkbox
                name="veg only"
                checked={props.onVegOnlyChecked}>
                Only Vegeterian fillings
            </Checkbox>
            {
                modifiedControls.map(control => (
                    <BuildControl
                        key={control.label}
                        label={control.label}
                        added={() => props.ingredientAdded(control.type)}
                        removed={() => props.ingredientRemoved(control.type)}
                        disabled={props.disabledInfo[control.type]} />
                ))


            }
            <button
                className={styles.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
            > ORDER NOW </button>
        </div>
    )
}

export default buildControls;