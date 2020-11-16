/*
This is a functional component which does create a button
*/
import React from 'react';
import styles from './Button.module.css';

const button = (props) => {

    return (
        <button className={[styles.Button, styles[props.btnType]].join(' ')} onClick={props.clicked}>
            {props.children}
        </button>
    )

}

export default button;