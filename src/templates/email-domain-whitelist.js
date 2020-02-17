
/**
 * @title_zh 注册邮箱后缀白名单
 * @type PRE_REGISTER
 * @category 访问控制
 * @overview_zh 若当前请求属于邮箱注册，只允许后缀为 example.com 的邮箱注册，否则返回 Access denied 错误提示。
 *
 */

async function pipe(context, callback) {
  const email = context.data.userInfo.email;
  // 非邮箱注册方式
  if (!email) {
    return callback(null, context)
  }
  if (!email.endsWith("example.com")) {
    return callback(new Error('Access denied.'));
  }
  return callback(null, context);
}
