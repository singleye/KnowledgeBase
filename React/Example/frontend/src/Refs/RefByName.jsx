import React, {Component} from 'react';

export default class RefByName extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {name1:"", name2:"", password:""};
    }

    /*
     * 在组件使用createReactClass时需要定义下面的方法来初始化
     */
    getInitialState() {
        return ({name1:"", name2:"", password:""});
    }

    handleSubmit() {
        console.log("handleSubmit, username:" + this.refs.userName.value);
        this.refs.userName.focus();
        console.log("username:" + this.usernameInput.value);
        console.log("password:" + this.passwordInput.value);
        this.setState({name1:this.usernameInput.value,
                      name2:this.refs.userName.value,
                      password:this.passwordInput.value});
    }

    render() {
        return (
            <div>
                Login page
                <div>
                    用户名：<input id="username1" ref={(username) => {this.usernameInput = username;}}></input>
                </div>
                <div>
                    用户名：<input id="username2" ref="userName"></input>
                </div>
                <div>
                    密码：<input id="password" type="password" ref={(password) => {this.passwordInput = password}}></input>
                </div>
                <div>
                    <input type="button" value="登陆" onClick={this.handleSubmit}/>
                </div>
                <div>
                    <p>name1 is "{this.state.name1}"</p>
                    <p>name2 is "{this.state.name2}"</p>
                    <p>password is "{this.state.password}"</p>
                </div>
            </div>
        );
    }
}
