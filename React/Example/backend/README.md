# 简介

后端使用django开发，主要为了支持前端代码

# API
## auth

* 描述：验证用户，获取token信息

* 输入参数：
|参数|描述|
|---|---|
|username|用户名|
|password|密码|

* 返回：

返回消息体是JSON格式

|数据|描述|
|---|---|
|token|token字符串|

```JSON
{"token":"c207f40e18ee8f911f1b05b6b4b80211aef6d280"}
```

* 实例：

```SH
curl -X POST -d "username=username&password=password" http://host:port/api/auth
```

# 环境

|软件|版本|
|---|---|
|python|3.6.2|
|Django|2.0.3|
