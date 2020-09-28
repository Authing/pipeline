
/**
 * @title_zh 注册邮箱后缀白名单
 * @title_en Register email domain whitelist
 * @type PRE_REGISTER
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 若当前请求属于邮箱注册，只允许后缀为 example.com 的邮箱注册，否则返回 Access denied 错误提示。
 * @overview_en Only allows user with email doamin example.com to register, or return Access denied Error .
 */

async function pipe(user, context, callback) {
  const { email } = context.request.body
  // 非邮箱注册方式
  if (!email) {
    return callback(null, user, context)
  }
  if (!email.endsWith("example.com")) {
    return callback(new Error('Access denied.'));
  }
  return callback(null, user, context);
}
