
/**
 * @title_zh 钉钉群通知
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category WebHook
 * @overview_zh 当有新用户注册时，通过钉钉群机器人通知。
 * DINGTALK_WEBHOOK 通过 env 环境变量获取。
 * 有关钉钉群机器人使用方法请见：https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/d535db33 .
 */

async function pipe(user, context, callback) {
  const webhook = env.DINGTALK_WEBHOOK
  await axios.post(webhook, {
    "msgtype": "text",
    "text": {
      "content": `Authing 新用户注册 ～
ID: ${user._id}
昵称：${user.username}
注册方式：${user.registerMethod}
邮箱：${user.email}
手机号：${user.phone}
UA: ${user.device}
用户池 ID: ${user.registerInClient}`
    },
  })
  callback(null, user, context)
}
