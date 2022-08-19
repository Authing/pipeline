
/**
 * @title_zh 检查用户名
 * @title_en Check username
 * @type PRE_COMPLETE_USER_INFO
 * @async false
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 检查用户名是否填写。
 * @overview_en Check if username is filled.
 */

async function pipe(user, context, callback) {
  const username = user.username;
  if (!username) {
    return callback(new Error('Username required.'));
  }
  return callback(null, user, context);
}
