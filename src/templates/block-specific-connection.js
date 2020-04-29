
/**
 * @title_zh 禁止特定方式注册
 * @title_en Block specific register/login method
 * @type PRE_REGISTER
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 禁止特定方式注册，注册方式可以通过 context.connection 获取。context.connection 可选值请见：https://docs.authing.cn/authing/extensibility/pipeline/context-object#connection .
 * @overview_en Block specific register/login method, register/login method can be get from context.connection, details about context.connection can be found here: https://docs.authing.cn/authing/extensibility/pipeline/context-object#connection .
 */

async function pipe(context, callback) {

  // if (context.data.userInfo.registerMethod === "email") {
  //   return callback(new Error("当前系统禁止使用邮箱注册登录！"))
  // }

  if (context.connection === "social:weibo") {
    return callback(new Error("当前系统禁止使用微博登录！"))
  }
  callback(null, user, context)
}
