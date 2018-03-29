import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import ComponentPage from '../Component';

export default class AppRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/component" component={ComponentPage}/>
            </BrowserRouter>
        );
    }
}
