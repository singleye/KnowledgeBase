import React from 'react';
import {Link} from 'react-router-dom';

import RefBasic from '../Refs/Basic';

export default class RefsPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h2>This page shows you how to use 'refs'</h2>
                <hr/>
                <h3>Method #1: use 'this.refs' in ES6 way</h3>
                <RefBasic />
            </div>
        );
    }
}
