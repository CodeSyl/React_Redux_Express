import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import FromConnectingMongodb from '../../components/Forms/Form-Connecting-Mdb';

//StyleSheet
import style from './styles.scss';

@connect((store) => {
    return { user: store.user.user }
})
export default class Contact extends Component {

    render() {
        return (
            <div>
                <h1>Contact Page</h1>
                <FromConnectingMongodb />
            </div>
        )
    }

}