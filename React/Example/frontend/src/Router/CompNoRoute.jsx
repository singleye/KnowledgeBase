import React from 'react'
var reactCreateClass = require('create-react-class');

const About = reactCreateClass({
    render: function() {
        return(<div>About</div>);
    }
});
const Inbox = reactCreateClass({
    render: function() {
        return(<div>Inbox</div>);
    }
});
const Home = reactCreateClass({
    render: function() {
        return(<div>Home</div>);
    }
});

const AppNoRoute = reactCreateClass({
    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    },

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    },

    render() {
        let Child
        switch (this.state.route) {
            case '/about': Child = About; break;
            case '/inbox': Child = Inbox; break;
            default:      Child = Home;
        }

        return (
          <div>
            <h1>App</h1>
            <ul>
              <li><a href="#/about">About</a></li>
              <li><a href="#/inbox">Inbox</a></li>
            </ul>
            <Child/>
          </div>
        );
    }
})

export default AppNoRoute;
