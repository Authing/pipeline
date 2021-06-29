
/**
 * @title_zh 添加自定义 accessToken
 * @title_en Add custom accessToken Claims
 * @type PRE_OIDC_ACCESS_TOKEN_ISSUED
 * @category OIDC 流程
 * @category_en OIDC Flow
 * @overview_zh 添加自定义 accessToken，有关更多 OIDC 流程 code 换 access_token 的详细信息请见：https://docs.authing.cn/authing/advanced/oidc/oidc-authorization .
 * 可以使用 OIDC 应用的 secret 解密 access_token: https://docs.authing.cn/authing/advanced/verify-jwt-token#oidc-secret-token 
 * @overview_en Add custom accessToken, if you want to check more details of OIDC flow, this might help you: ：https://docs.authing.cn/authing/advanced/oidc/oidc-authorization .
 * You can use OIDC App's secret to decrypt accessToken: https://docs.authing.cn/authing/advanced/verify-jwt-token#oidc-secret-token
 */

async function pipe(user, context, callback) {
  user.addAccessToken("KEY", "VALUE")
  callback(null, user, context)
}
