import React from 'react';

import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import { Component } from 'react';

const withErrorHandler = (WrappedComponnet, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        backdropClicked={this.errorConfirmedHandler}> {this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponnet {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;