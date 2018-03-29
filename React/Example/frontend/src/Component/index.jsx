import React from 'react';

import FunctionalComponent from './function';
import ES6Component from './ES6';
import NonES6Component from './nonES6';

export default class ComponentPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Component test page</h1>
                <FunctionalComponent />
                <ES6Component />
                <NonES6Component />
            </div>
        );
    }
}
