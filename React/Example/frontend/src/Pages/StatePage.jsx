import React from 'react';
import {Link} from 'react-router-dom';

import StateES6 from '../State/ES6';
import StateNonES6 from '../State/nonES6';

export default class StatePage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h2>This page shows you how to use state.</h2>

                <hr/>
                <h3>Method #1: use state in ES6</h3>
                <StateES6 />

                <hr/>
                <h3>Method #2: use state in non-ES6 way</h3>
                <StateNonES6 />
            </div>
        );
    }
}
