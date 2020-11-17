import React, { Component } from 'react';

import Aux from "../../hoc/Aux";
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import styles from "./Layout.module.css"

class Layout extends Component {

    state = {
        shouldOpenSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({ shouldOpenSideDrawer: false })
    }

    render() {
        return (
            <Aux>
                <Toolbar />
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
