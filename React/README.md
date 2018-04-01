# 目录
* [1.开发环境搭建](#1)
* [2.创建项目](#2)
* [3.React开发](#3)
	* [3.1 创建组件](#3.1)
	* [3.2 state](#3.2)
	* [3.3 props](#3.3)
	* [3.4 Ajax](#3.4)
	* [3.5 Router](#3.5)
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

## <span id="3.1">3.1 创建组件</span>

### 方法1: 使用function声明组件

例子： [/frontend/src/Component/function.js](/frontend/src/Component/function.js)

```JS
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
```

### 方法2: ES6声明组件的方式：

```JS
import React from 'react';

class SubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <textarea>{this.props.text}</textarea>
            </div>
        );
    }
}

class ES6Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is a ES6 component</h1>
                <SubComponent text="I'm a sub component" />
            </div>
        );
    }
}

export default ES6Component;
```

### 方法3: 使用"create-react-class"

```javascript
import React from 'react';

var createReactClass = require('create-react-class');

var NonES6SubComponent = createReactClass({
    render: function() {
        return (
            <div>
                <textarea>{this.props.text}</textarea>
            </div>
        );
    }
});

var NonES6Component = createReactClass({
    render: function() {
        return (
            <div>
                <h3>This is a non-ES6 component</h3>
                <NonES6SubComponent text="I'm a non-ES6 sub-component" />
            </div>
        );
    }
});

export default NonES6Component;
```

## <span id="3.2">3.2 state</span>

### Non-ES6

getInitialState()


## <span id="3.3">3.3 props</span>

### Non-ES6

getDefaultProps()

## <span id="3.4">3.4 Ajax</span>

### <span id="3.4.x">3.4.x AJAX返回结果的处理方式</span>

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

## <span id="3.5">3.5 Router</span>

安装'react-router'

```sh
npm install --save react-router
```

https://blog.csdn.net/sinat_17775997/article/details/69218382

http://react-guide.github.io/react-router-cn/

https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

Router实现原理： https://github.com/youngwind/blog/issues/109


## <span id="3.6">3.6 store</span>

### Redux

Redux中文文档： https://cn.redux.js.org
React Redux for beginners: https://www.valentinog.com/blog/react-redux-tutorial-beginners/


# <span id="4">4. 参考资料</span>
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* [使用fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
* [React AJAX best practice](https://www.javascriptstuff.com/react-ajax-best-practices/)
* [React router](https://github.com/brickspert/blog/issues/1#react-router)
* [React入门](https://hulufei.gitbooks.io/react-tutorial/content/index.html)
* [React training](https://reacttraining.com/react-router/web/example/basic)

## 4.1 学习例子

* https://github.com/bailicangdu/react-pxq

* [多页面模板](https://github.com/AI-UNICOM/ai-react-template)