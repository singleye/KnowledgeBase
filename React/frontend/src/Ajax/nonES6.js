import React from 'react';

var createReactClass = require('create-react-class');

var AuthAjaxNonES6 = createReactClass({
    getInitialState: function() {
        return ({
            token:'',
            login:false
        });
    },

    componentDidMount: function() {
        fetch(
            "http://localhost:8000/api/auth",
            {
                method:'POST',
                body: "username={this.props.username}&password={this.props.password}"
            }
        ).then(
            res => res.json()
        ).then(
            (result) => {
                this.setState({token:result.token, login:true});
            },

            (error) => {
                console.log(error);
            }
        )
    },

    /*
    componentWillMount: function() {
    },
    */

    render: function() {
        if (this.state.login) {
            return <div>Login</div>;
        }else {
            return <div>Failure</div>;
        }
    }
});


export default AuthAjaxNonES6;
