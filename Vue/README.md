<center><h1>VUE.js</h1></center>

# 目录
* [1.实例](#1)
	* [1.1 实例](#1.1)
	* [1.2 实例生命周期](#1.2)
* [2.组件](#2)


# <span id="1">1.实例</span>
## <span id="1.1">1.1 实例</span>
### 创建实例

VUE实例可以在"\<script\>"中进行创建，下面是一个例子：

```JS
var app = new Vue({
	el:"#app",
	data: {
		message: "Hello world!"
	}
});
```

### 模版渲染

上面创建出的实例制定了"el"和"data"属性。

|属性|意义|
|---|---|
|el|指定模版中需要被渲染的DOM ID|
|data|指定模版中相应DOM里使用到的数据|

例如：

```HTML
<div id="app">
{{ message }}
</div>
```

上面的模版定义了个ID为"app"的DOM，其中使用了"message"这个数据。


### TODO
[完整例子](github.com)


## <span id="1.2">1.2 实例生命周期</span>

![实例生命周期](https://cn.vuejs.org/images/lifecycle.png)

# <span id="2">2.组件</span>

类似React的组件思想，VUE也支持组件开发模式，