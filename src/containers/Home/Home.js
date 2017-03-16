import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import Nav from '../../components/Nav/Nav';

// Actions
import { fectchUser } from '../../actions/userAction';

//StyleSheet
import styles from './styles.scss';

@connect((store) => {
    return { user: store.user.user }
})
export default class Home extends Component {
    componentWillMount() {
        this.props.dispatch(fectchUser())
    }

    render() {
        const { user } = this.props;
        return (
            <div className="home_container">
                <h1>React Redux Express App</h1>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>{user.nickname}</li>
                            <li>{user.name}</li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }

}