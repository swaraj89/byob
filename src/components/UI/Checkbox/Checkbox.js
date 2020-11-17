/*
This is a functional component which does  description
*/
import React from 'react';
import styles from './Checkbox.module.css';

const checkBox = (props) => {

    return (
        <div
            className={styles.Checkbox}>
            <input
                type="checkbox"
                name={props.name}
                id={props.id}
                onChange={props.checked}></input>
            <label htmlFor={props.name}>
                {props.children}
            </label>
        </div>
    );

}

export default checkBox;