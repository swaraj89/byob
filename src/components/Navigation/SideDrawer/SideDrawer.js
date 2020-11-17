/*
This is a functional component which does  description
*/
import React from 'react';
import styles from './SideDrawer.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

    let assignedClasses = [styles.SideDrawer, props.open ? styles.Open : styles.Close];

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closeDraw} />
            <div className={assignedClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;