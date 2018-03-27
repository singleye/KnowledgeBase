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



# <span id="N">N. 参考资料</span>
* [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)