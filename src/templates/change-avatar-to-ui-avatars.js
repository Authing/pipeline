
/**
 * @title_zh 使用 ui-avatars API 生成头像
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 扩展用户字段
 * @overview_zh 根据用户名使用 ui-avatars API 生成头像，如 username 为 John Doe 的用户，头像为 https://ui-avatars.com/api/?name=John+Doe .
 * 详情请见：https://ui-avatars.com/ .
 *
 */

async function pipe(user, context, callback) {
  const name = user.username || user.nickname || user.email
  user.photo = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`
  callback(null, user, context)
}
