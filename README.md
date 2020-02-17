# Authing Pipleline 

Authing Pipeline 是一组运行在云端的用户自定义 JavaScript 代码，可以让开发者扩展、自定义 Authing 能力。

Authing Pipeline 函数均为用户可自定义，同时我们还提供了丰富的函数模版，帮助开发者快速上手开发。

同时 Pipeline 为一组函数，和普通 Hooks 的区别在于，Pipeline 整个流程中的函数数据可以相互传递，实现工业流水线一样的效果。这种设计模式，可以使得开发者的自定义函数更加模块化，便于管理。

Authing Pipeline 后端应用 serverless 架构，所有的用户自定义代码均运行在云端，保证不同租户之间的隔离性，同时能弹性伸缩，既保证了安全性，有提升了运行效率。

## 模版列表

- [飞书群通知](./src/templates/lark-notify.js)
- [Slack 群通知](./src/templates/slack-notify.js)
- [钉钉群通知](./src/templates/dingtalk-notify.js)
- [注册邮箱后缀白名单](./src/templates/email-domain-whitelist.js)
- [注册 IP 段白名单](./src/templates/ip-range-whitelist.js)
- [添加用户至用户组](./src/templates/add-user-to-group.js)
- [添加用户自定义字段](./src/templates/persist-metadata.js)
- [修改默认头像](./src/templates/change-default-avatar.js)
- [每次用户登录时将最新位置写入其 MetaData](./src/templates/add-location-to-metadata.js)

## Guild Lines

### 使用 Authing 控制台创建你的第一个 Pipeline 函数

- [创建你的第一个 Pipeline 函数](https://docs.authing.cn/authing/extensibility/pipeline/write-your-first-pipeline-function)
- [了解如何使用 Authing 控制台调试函数](https://docs.authing.cn/authing/extensibility/pipeline/how-to-debug)

### 了解 Pipeline 函数 API

- [Pipeline 函数 API 文档](https://docs.authing.cn/authing/extensibility/pipeline/pipeline-function-api-doc)
- [user 对象完整字段](https://docs.authing.cn/authing/extensibility/pipeline/user-object)
- [context 对象完整字段](https://docs.authing.cn/authing/extensibility/pipeline/context-object)

### 了解如何使用环境变量

- [使用环境变量](https://docs.authing.cn/authing/extensibility/pipeline/env)

### 了解有哪些可以直接使用的 Node Modules

- [有哪些开箱即用的 Node Modules](https://docs.authing.cn/authing/extensibility/pipeline/available-node-modules)


### 使用 API 管理 Pipeline

- [Node SDK](https://docs.authing.cn/authing/extensibility/pipeline/node-sdk)
- [非 JS 开发者，请见 GraphQL API](https://docs.authing.cn/authing/extensibility/pipeline/node-sdk)


## 应用场景

- 借助 Authing Pipeline，开发者可以实现以下功能：
- 白名单机制：如注册邮箱域名白名单、注册 IP 白名单等。
- 事件通知：如用户注册之后发送群通知、用户登录 IP 异常通知等。
- 权限控制：如用户登录之后根据邮箱将其加入某用户组等。
- 扩展用户字段：如往给该请求用户添加自定义 metadata 等。
- 自定义  token：如往 token 中加入自定义字段等。
- ... 还有更多，想象空间是无穷的。

## 特性列表

- 友好方便的控制台用于调试 Pipeline 代码
- 丰富的模版
- 在 Pipeline 函数中直接使用 Authing Node SDK.
- 可以直接使用网络库 axios
