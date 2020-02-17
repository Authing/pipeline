
/**
 * @title_zh 将用户添加至用户组
 * @type POST_AUTHENTICATION
 * @category 访问控制
 * @overview_zh 如果当前用户邮箱后缀为 authing.cn，将其加入 ROOT_GROUP_ID 对应的用户组。
 * ROOT_GROUP_ID 从全局环境变量 env 中获取，有关如何使用环境变量，请见：https://docs.authing.cn/authing/extensibility/pipeline/env .
 * 这里使用了 Authing Node SDK 的权限控制 API, 在这里可以了解更多：https://docs.authing.cn/authing/sdk/sdk-for-node/rbac
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