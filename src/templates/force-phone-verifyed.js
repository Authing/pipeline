
/**
 * @title_zh 强制手机号验证之后才能登录
 * @type POST_AUTHENTICATION
 * @category 访问控制
 * @overview_zh 强制邮箱验证之后才能登录, 用户邮箱是否验证过可通过 user.phoneVerified 获取。
 *
 */

async function pipe(user, context, callback) {
  if (!user.phoneVerified) {
    return callback(new Error("请先验证手机号！"))
  }
  callback(null, user, context)
}