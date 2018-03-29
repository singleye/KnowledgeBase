import React from 'react';

function SubFunctionalComponent(props) {
    return (
        <textarea>
            {props.text}
        </textarea>
    );
}

function FunctionalComponent() {
    return (
        <div>
            <h1>This is a functional component</h1>
            <SubFunctionalComponent text="I'm a sub-functional component" />
        </div>
    );
}

export default FunctionalComponent;
