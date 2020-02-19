
/**
 * @title_zh 每周日凌晨 3-6 点系统维护禁止注册/登录
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 访问控制
 * @overview_zh 每周日凌晨 3-6 点系统维护禁止注册/登录。
 *
 */

async function pipe(user, context, callback) {
  const date = new Date();
  const d = date.getDay();
  const n = date.getHours();
  // 每周日凌晨 3-6 点禁止注册
  if (d === 0 && (3 <= n && n <= 6)) {
    return callback(new Error('系统维护中，暂时停止注册！'));
  }
  callback(null, user, context)
}
