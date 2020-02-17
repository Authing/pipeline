
/**
 * @title_zh 注册手机号白名单
 * @type PRE_REGISTER
 * @category 访问控制
 * @overview_zh 只有在白名单列表内的手机号才能注册，这里手机号列表用 "," 逗号隔开。
 * PHONE_WHITELIST 从全局环境变量 env 中获取，有关如何使用环境变量，请见：https://docs.authing.cn//authing/extensibility/pipeline/env .
 */

async function pipe(context, callback) {
  // 非手机号注册跳过
  const phone = context.data.userInfo.phone
  if (!phone) {
    return callback(null, context)
  }

  const whitelist = env.PHONE_WHITELIST.split(',')
  if (whitelist.indexOf(phone) === -1) {
    return callback(new Error('Access Denied!'))
  }
  return callback(null, context)
}
