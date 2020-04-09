
/**
 * @title_zh 飞书新注册通知
 * @title_en Lark Notify
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @async true
 * @category WebHook
 * @category_en WebHook
 * @overview_zh 当有新用户注册时，通过飞书群机器人通知。
 * LARK_WEBHOOK 从全局环境变量 env 中获取，有关如何使用环境变量，请见：https://docs.authing.cn/authing/extensibility/pipeline/env .
 * @overview_en Notify using Lark when new user registered . 
 * LARK_WEBHOOK is load from global object env, more information about how to use environment variables inside pipeline function: https://docs.authing.cn/authing/extensibility/pipeline/env .
 */

async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK
  await axios.post(webhook, {
    title: "Authing 新用户注册 ~",
    text: `用户信息：
ID: ${user._id}
昵称：${user.username}
注册方式：${user.registerMethod}
邮箱：${user.email}
手机号：${user.phone}
UA: ${user.device}
用户池 ID: ${user.registerInClient}
`
  })
  return callback(null, user, context)
}