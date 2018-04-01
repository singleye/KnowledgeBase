import React from 'react';
import {Link} from 'react-router-dom';

import LoginAsync from '../Ajax/LoginAsync';
import LoginPromise from '../Ajax/LoginPromise';

export default class AjaxPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h2>This page shows you how to do AJAX.</h2>

                <hr/>
                <h3>Method #1: use 'fetch' in async way</h3>
                <LoginAsync />

                <hr/>
                <h3>Method #2: use 'fetch' in PROMISE way</h3>
                <LoginPromise />
            </div>
        );
    }
}
