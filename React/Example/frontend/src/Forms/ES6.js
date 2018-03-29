import React from 'react';


export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {token:"", value:"Please write something"};
    }

    handleSubmit(event) {
        console.log("handleSubmit");
        //alert("Name:" + this.refs.nameInput.value);
        event.preventDefault();

        fetch(
            "http://localhost:8000/api/auth",
            {
                method:'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: "username=singleye&password=qazwsxedc"
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
    }

    handleChange(event) {
        this.setState({value:event.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <div>
                    <input type='text' ref='nameInput'/>
                    <input type='submit' value='submit' />
                </div>
            </form>
        );
    }
}
