
/**
 * @title_zh Slack 群通知
 * @title_en Slack Notify
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category WebHook
 * @category_en WebHook
 * @overview_zh 新用户注册 Slack 群通知。
 * SLACK_WEBHOOK 从全局环境变量 env 中获取，有关如何使用环境变量，请见：https://docs.authing.cn//authing/extensibility/pipeline/env .
 * 有关 Slack Incoming Message 使用方法请见：https://www.slack.com/services/new/incoming-webhook .
 * @overview_en Notify using Slack when new user registered . 
 * SLACK_WEBHOOK is load from global object env, more information about how to use environment variables inside pipeline function: https://docs.authing.cn/authing/extensibility/pipeline/env .
 * More about Slack Incoming Message can be found here: https://www.slack.com/services/new/incoming-webhook .
 */

async function pipe(user, context, callback) {
  const qs = require('querystring')
  const webhook = env.SLACK_WEBHOOK
  const body = qs.stringify({
    payload: JSON.stringify({
      text: `Authing 新用户注册 ～
ID: ${user._id}
昵称：${user.username}
注册方式：${user.registerMethod}
邮箱：${user.email}
手机号：${user.phone}
UA: ${user.device}
用户池 ID: ${user.registerInClient}`
    })
  })
  await axios.post(webhook, body, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  callback(null, user, context)
}
