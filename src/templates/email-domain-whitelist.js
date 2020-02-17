
/**
 * @title_zh 注册邮箱域名白名单
 * @type PRE_REGISTER
 * @category 访问控制
 * @overview_zh 注册邮箱域名白名单
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