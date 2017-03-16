import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

//StyleSheet
import styles from './styles.scss';

export default class Nav extends Component {
    render() {
        return (
            <div className="container" role="nav">
                <div className="row">
                    <div className="col">
                        <IndexLink to="/"><p className="title">React Redux App</p></IndexLink>
                    </div>
                    <div className="row link-container">
                        <div className="col">
                            <IndexLink to="/"><p>React</p></IndexLink>
                        </div>
                        <div className="col">
                            <Link to="about"><p>Redux</p></Link>
                        </div>
                        <div className="col">
                            <Link to="products"><p>Express</p></Link>
                        </div>
                        <div className="col">
                            <Link to="news"><p>Webpack</p></Link>
                        </div>
                        <div className="col">
                            <Link to="contact"><p>Config</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}