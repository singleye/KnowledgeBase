import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

var reactCreateClass = require('create-react-class');

const About = reactCreateClass({
    render() {
        return <div>About</div>;
    }
});

const Inbox = reactCreateClass({
    render() {
        return <div>Inbox</div>;
    }
});

const Home = reactCreateClass({
    render() {
        return <div>Home</div>;
    }
});

const AppRoute = reactCreateClass({
    render() {
        return (
          <div>
            <h1>App</h1>
            <ul>
              <li><Link to="about">About</Link></li>
              <li><Link to="inbox">Inbox</Link></li>
            </ul>
            {this.props.children || "Empty area"}
          </div>
        );
    }
});


const AppWithRoute = reactCreateClass({
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={AppRoute}>
                    <Route path="about" component={About} />
                    <Route path="inbox" component={Inbox} />
                </Route>
            </BrowserRouter>
        );
    }
});

export default AppWithRoute;
