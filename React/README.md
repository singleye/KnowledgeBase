# 目录
* [1.开发环境搭建](#1)
* [2.创建项目](#2)
* [3.React开发](#3)
* [N.参考资料](#N)

# <span id="1">1. 开发环境搭建</span>

## <span id="1.1">1.1 安装npm</span>

## <span id="1.2">1.2安装webpack</span>

# <span id="2">2. 创建项目</span>
## 方法1:使用create-react-app搭建

```shell
create-react-app frontend
cd frontend
```

安装'create-react-class'

```shell
npm install --save create-react-class
```

## 方法2:手动搭建

TODO


# <span id="3">3. React开发</span>

## <span id="3.1">3.1 声明组件</span>

### ES6声明组件的方式：

```javascript
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 非ES6需要使用"create-react-class"

```javascript
var createReactClass = require('create-react-class');
var HelloWorld = createReactClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});
```


## <span id="3.2">3.2 Ajax</span>

### <span id="3.2.x">3.2.x AJAX返回结果的处理方式</span>

|比较|PROMISE|async/await|
|---|---|---|
|代码整洁度|编写复杂|编写简洁|
|版本要求||需要ES7支持|

#### 方式1: PROMISE方式

定义action:

```JS
// Action/ajax.js
export const authTokenPromise = (username, password) => fetch(
    "http://localhost:8000/api/auth",
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body:'username=' + username + '&password=' + password
    },
);
```

在component中使用action，'PROMISE'的处理方式是通过'.then()'来完成的。

```JS
import React from 'react';
import {authTokenPromise} from '../Actions/ajax';

class LoginForm extends React.Component {
    ...

    // PROMISE way
    handleClick() {
        authTokenPromise(this.refs.username.value, this.refs.password.value).then(
            res => res.json()
        ).then(
            (result) => {
                this.props.authCallback(true, result.token);
            },
            (error) => {
                this.props.authCallback(false, '');
            }
        )
    }
    ...
}
```

#### 方式2: async/await方式

首先定义action

```JS
// Actions/ajax.js
export const authToken = (username, password) => fetch(
    "http://localhost:8000/api/auth",
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body:'username=' + username + '&password=' + password
    },
).then(
    res => res.json()
).then(
    (result) => {
        return ({signedIn:true, token:result.token})
    },

    (error) => {
        console.log(error);
        return ({signedIn:false, token:''})
    }
);
```

在component中的事件处理函数前指定'async'，并在调用的'action'前指定'await'，这样可以像一般函数调用那样直接使用'action'的返回结果。

```JS
// loginForm.js
import React from 'react';
import {authToken} from '../Actions/ajax';

class LoginForm extends React.Component {
    ...

    // async/await approach
    async handleClick() {
        var result = await authToken(this.refs.username.value, this.refs.password.value);
        console.log(result);
        this.props.authCallback(result.signedIn, result.token);
    }

    ...
}
```




# <span id="N">N. 参考资料</span>
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)