
/**
 * @title_zh 往 Token 中写入自定义字段
 * @title_en Add custom token field
 * @type POST_AUTHENTICATION
 * @category 扩展用户字段
 * @category_en Extend UserInfo
 * @overview_zh 往 Token 中写入自定义字段, 此接口仅在 POST_AUTHENTICATION（登录后） Pipeline 中可用。
 * 了解如何检验、解密 token，请见: https://docs.authing.cn/authing/advanced/verify-jwt-token 。
 * 由于 graphql 限制，如果你的 token 中加入了自定义字段，请务必使用 https://users.authing.cn/authing/token 接口，否则无法获取到自定义字段。
 * @overview_en Add custom field to user token, this function can only be used at POST_AUTHENTICATION Pipeline functions .
 * Learn how to validate, decrypt token here: https://docs.authing.cn/authing/advanced/verify-jwt-token .
 * Because GraphQL Constrants, if you add custom field to token, do use https://users.authing.cn/authing/token API, otherwise you will not get custom token filed .
 */

async function pipe(user, context, callback) {
  user.setTokenField('KEY', 'VALUE')
  callback(null, user, context)
}
