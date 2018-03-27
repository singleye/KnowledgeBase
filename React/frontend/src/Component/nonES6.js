import React from 'react';

var createReactClass = require('create-react-class');

var NonES6SubComponent = createReactClass({
    render: function() {
        return (
            <div>
                <textarea>{this.props.text}</textarea>
            </div>
        );
    }
});

var NonES6Component = createReactClass({
    render: function() {
        return (
            <div>
                <h3>This is a non-ES6 component</h3>
                <NonES6SubComponent text="I'm a non-ES6 sub-component" />
            </div>
        );
    }
});

export default NonES6Component;
