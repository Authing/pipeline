
/**
 * @title_zh 飞书新注册通知
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category WebHook
 * @overview_zh 当有新用户注册时，通过飞书群机器人通知。
 * LARK_WEBHOOK 通过 env 环境变量获取。
 *
 */

async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK
  await axios.post(webhook, {
    title: "New User Registered - From Authing Pipeline",
    text: `
用户信息：
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