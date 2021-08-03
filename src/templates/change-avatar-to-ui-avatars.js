
/**
 * @title_zh 使用 ui-avatars API 生成头像
 * @title_en Generate Avatar by ui-avatars API
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 扩展用户字段
 * @category_en Extend UserInfo
 * @overview_zh 根据用户名使用 ui-avatars API 生成头像，如 username 为 John Doe 的用户，头像为 https://ui-avatars.com/api/?name=John+Doe .
 * 详情请见：https://ui-avatars.com/ 
 * @overview_en Generate Avatar y ui-avatars API based on username. For example, if use's username if John Doe, his avatar will be https://ui-avatars.com/api/?name=John+Doe .
 * More details about ui-avatar: https://ui-avatars.com/ 
 */

async function pipe(user, context, callback) {
  const name = user.username || user.nickname || user.email
  user.photo = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`
  callback(null, user, context)
}
