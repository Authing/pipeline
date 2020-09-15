
/**
 * @title_zh 添加自定义 idToken
 * @title_en Add custom idToken Claims
 * @type PRE_OIDCTOKENISSUED
 * @category OIDC 流程
 * @category_en OIDC Flow
 * @overview_zh 添加自定义 idToken，有关更多 OIDC 流程 code 换 id_token 的详细信息请见：https://docs.authing.cn/authing/advanced/oidc/oidc-authorization .
 * 可以使用 OIDC 应用的 secret 解密 id_token: https://docs.authing.cn/authing/advanced/verify-jwt-token#oidc-secret-token 
 * @overview_en Add custom idToken, if you want to check more details of OIDC flow, this might help you: ：https://docs.authing.cn/authing/advanced/oidc/oidc-authorization .
 * You can use OIDC App's secret to decrypt idToken: https://docs.authing.cn/authing/advanced/verify-jwt-token#oidc-secret-token
 */

async function pipe(user, context, callback) {
  user.addIdToken("KEY", "VALUE")
  callback(null, user, context)
}
