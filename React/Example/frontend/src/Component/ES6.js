import React from 'react';

class SubComponent extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {
        return (
            <div>
                <textarea>{this.props.text}</textarea>
            </div>
        );
    }
}

class ES6Component extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {
        return (
            <div>
                <h1>This is a ES6 component</h1>
                <SubComponent text="I'm a sub component" />
            </div>
        );
    }
}

export default ES6Component;
