import React from 'react';
import {Link} from 'react-router-dom';

import ES6Component from '../Component/ES6';
import NonES6Component from '../Component/nonES6';
import FunctionalComponent from '../Component/function';

export default class ComponentPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h2>This page shows you how to create a component in React.</h2>
                <hr/>
                <h3>Method #1: Create a component with ES6 way</h3>
                <ES6Component />

                <hr/>
                <h3>Method #2: Create a component with non-ES6 way</h3>
                <NonES6Component />

                <hr/>
                <h3>Method #3: Create a component with a function</h3>
                <FunctionalComponent />
            </div>
        );
    }
}
