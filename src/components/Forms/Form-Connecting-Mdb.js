import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fectchUser, fetchMongoDb } from '../../actions/userAction';

//StyleSheet
import style from './styles.scss';

@connect((store) => {
    return { user: store.user.user }
})
export default class FromConnectingMongodb extends Component {
    constructor() {
        super();
        this.state = { user: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('THIS.REFS', this.textForMongoDb.value);
        this.props.dispatch(fetchMongoDb({ 'text': this.textForMongoDb.value }));
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicText" ref="textForMongoDb">
                        <ControlLabel>Send Data to MongoDb</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter text"
                            inputRef={(ref) => { this.textForMongoDb = ref }}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>Data is what you write</HelpBlock>
                    </FormGroup>
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

