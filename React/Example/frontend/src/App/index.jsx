import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import ComponentPage from '../Pages/ComponentPage';
import AjaxPage from '../Pages/AjaxPage';
import RefsPage from '../Pages/RefsPage';
import StatePage from '../Pages/StatePage';

export default class MainApp extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/component" component={ComponentPage} />
                    <Route path="/refs" component={RefsPage} />
                    <Route path="/ajax" component={AjaxPage} />
                    <Route path="/state" component={StatePage} />
                </div>
            </BrowserRouter>
        );
    }
}
