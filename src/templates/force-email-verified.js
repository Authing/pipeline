
/**
 * @title_zh 强制邮箱验证之后才能登录
 * @title_en Force Email to be Verified
 * @type POST_AUTHENTICATION
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 强制邮箱验证之后才能登录, 用户邮箱是否验证过可通过 user.emailVerified 获取。
 * @overview_en Force email to be verified, whether use email is verified can be get from user.emailVerified .
 */

async function pipe(user, context, callback) {
  if (!user.emailVerified) {
    return callback(new Error("请先验证邮箱！"))
  }
  callback(null, user, context)
}
