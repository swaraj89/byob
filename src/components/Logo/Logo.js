/*
This is a functional component which does create logo
*/
import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => {

    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="BYOB" />
        </div>
    )

}

export default logo;