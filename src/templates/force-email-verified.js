
/**
 * @title_zh 强制邮箱验证之后才能登录
 * @type POST_AUTHENTICATION
 * @category 访问控制
 * @overview_zh 强制邮箱验证之后才能登录, 用户邮箱是否验证过可通过 user.emailVerified 获取。
 *
 */

async function pipe(user, context, callback) {
  if (!user.emailVerified) {
    return callback(new Error("请先验证邮箱！"))
  }
  callback(null, user, context)
}
