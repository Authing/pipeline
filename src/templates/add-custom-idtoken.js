
/**
 * @title_zh 添加自定义 idToken
 * @type PRE_OIDCTOKENISSUED
 * @category OIDC 流程
 * @overview_zh 添加自定义 idToken，有关更多 OIDC 流程 code 换 id_token 的详细信息请见：https://docs.authing.cn/authing/advanced/oidc/oidc-authorization .
 * 可以使用 OIDC 应用的 secret 解密 id_token: https://docs.authing.cn/authing/advanced/verify-jwt-token#oidc-secret-token 
 *
 */

async function pipe(user, context, callback) {
  user.setIdTokenField("KEY", "VALUE")
  callback(null, user, context)
}
