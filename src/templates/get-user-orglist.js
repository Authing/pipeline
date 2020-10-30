
/**
 * @title_zh 获取用户组织机构列表
 * @title_en Get User Org List
 * @type PRE_OIDCTOKENISSUED
 * @category OIDC 流程
 * @category_en OIDC Flow
 * @overview_zh 获取用户所在的组织机构列表
 * @overview_en Get User Org List
 */

async function pipe(user, context, callback) {
  const userId = user.id;
  const orgList = await authing.users.listOrgs(userId)
  // 你可以使用 log 方法查看该函数的 
  // log(orgList)
  const orgIds = []
  for (const nodePath of orgList) {
    orgIds.push(nodePath.find(item => item.type === 'org').id)
  }
  user.addIdToken('orgIds', orgIds)
  callback(null, user, context)
}
