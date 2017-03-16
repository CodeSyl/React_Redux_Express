import React, { Component } from 'react';

//Component
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';

//StyleSheet
import style from './styles.scss';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Nav />
                <hr />
                {this.props.children}
                <div className="container">
                </div>
            </div>
        )
    }
}