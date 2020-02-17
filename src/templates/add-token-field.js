
/**
 * @title_zh 往 Token 中写入自定义字段
 * @type POST_AUTHENTICATION
 * @category 扩展用户字段
 * @overview_zh 往 Token 中写入自定义字段, 此接口仅在 POST_AUTHENTICATION（登录后） Pipeline 中可用。
 * 了解如何检验、解密 token，请见: https://docs.authing.cn/authing/advanced/verify-jwt-token 。
 * 由于 graphql 限制，如果你的 token 中加入了自定义字段，请务必使用 https://users.authing.cn/authing/token 接口，否则无法获取到自定义字段。
 *
 */

async function pipe(user, context, callback) {
  user.setTokenField('KEY', 'VALUE')
  callback(null, user, context)
}
