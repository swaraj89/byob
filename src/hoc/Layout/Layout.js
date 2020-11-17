import React, { Component } from 'react';

import Aux from "../Aux/Aux";
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import styles from "./Layout.module.css"

class Layout extends Component {

    state = {
        shouldOpenSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ shouldOpenSideDrawer: false })
    }

    hamburgerClickHandler = () => {
        this.setState((prevState) => {
            return { shouldOpenSideDrawer: !prevState.shouldOpenSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    open={this.state.shouldOpenSideDrawer}
                    hamburgerClicked={this.hamburgerClickHandler} />
                <SideDrawer
                    open={this.state.shouldOpenSideDrawer}
                    closeDraw={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
