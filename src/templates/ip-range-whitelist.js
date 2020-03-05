
/**
 * @title_zh 注册 IP 段白名单
 * @title_en Register IP Whitelist
 * @type PRE_REGISTER
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 只允许在特定 IP 段的用户可以注册。
 * 这里使用 utils.ipRangeCheck() 方法判断 IP 是否在 IP 段 110.53.254.1 ～ 110.53.254.255 之间。
 * 有关内置 utils 模块的使用，请见 https://docs.authing.cn//authing/extensibility/pipeline/available-node-modules .
 * @overview_en Only allows use who's ip in specific range .
 * We use utils.ipRangeCheck() here to check if ip in range 110.53.254.1 ～ 110.53.254.255 .
 * More about utils module: https://docs.authing.cn//authing/extensibility/pipeline/available-node-modules .
 */

async function pipe(context, callback) {
  const utils = require("./utils")
  const ip = context.ip
  if (ip && utils.ipRangeCheck(ip, ["110.53.254.1", "110.53.254.255"])) {
    return callback(null, context)
  }
  return callback(new Error('Access Denied!'))
}
