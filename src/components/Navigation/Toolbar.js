/*
This is a functional component which does show a toolbar
*/
import React from 'react';

import styles from './Toolbar.module.css';

import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import Hamburger from '../Navigation/Hamburger/Hamburger';

const toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <Hamburger
                isOpen={props.open}
                clicked={props.hamburgerClicked} />
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );

}

export default toolbar;