
/**
 * @title_zh 强制手机号验证之后才能登录
 * @title_en Force Phone to be Verified
 * @type POST_AUTHENTICATION
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 强制邮箱验证之后才能登录, 用户邮箱是否验证过可通过 user.phoneVerified 获取。
 * @overview_en Force phone to be verified, whether use phone is verified can be get from user.phoneVerified .
 */

async function pipe(user, context, callback) {
  if (!user.phoneVerified) {
    return callback(new Error("请先验证手机号！"))
  }
  callback(null, user, context)
}