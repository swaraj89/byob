/*
This is a functional component which does Build controls
*/
import React from 'react';

import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Meat', type: 'meat' },
    {label: 'Bacon', type: 'bacon' },
]

const buildControls = (props) => {
    return (
        <div className= { styles.BuildControls }>
            <p>Price: <strong>&#8377; {props.price} </strong> </p>
                { 
                    controls.map(control => ( 
                        <BuildControl 
                            key={control.label} 
                            label={control.label}
                            added={ () => props.ingredientAdded(control.type) }
                            removed={ () => props.ingredientRemoved(control.type) }
                            disabled={ props.disabledInfo[control.type] }/> 
                    ))
                }
            <button 
                className={ styles.OrderButton } 
                disabled= { !props.purchasable }> ORDER NOW </button>
        </div>
    )
}

export default buildControls;