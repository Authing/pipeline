
/**
 * @title_zh 根据邮箱后缀将用户添加到某 Group
 * @type POST_AUTHENTICATION
 * @category 访问控制
 * @overview_zh 根据邮箱后缀将用户添加到某 Group。
 *
 */

async function pipe(user, context, callback) {
  if (!user.email.endsWith('@authing.cn')) {
    return callback(null, user, context)
  }

  try {
    await authing.authz.addUserToGroup({
      userId: user._id,
      groupId: env.ROOT_GROUP_ID
    })
  } catch (error) { }

  callback(null, user, context)
}