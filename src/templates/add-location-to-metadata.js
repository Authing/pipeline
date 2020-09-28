
/**
 * @title_zh 将用户最新位置信息写入 Metadata
 * @title_en Write the newest location of the user to Metadata
 * @type POST_AUTHENTICATION
 * @category 扩展用户字段
 * @category_en Extend UserInfo
 * @overview_zh 将用户最新位置信息写入 Metadata, 使用前请务必判断 context.geo 是否存在 .
 * context.geo 字段详细内容请见：https://docs.authing.cn//authing/extensibility/pipeline/context-object
 * @overview_en Write the newest location of the user to Metadata, please do not to forget check if context.geo really exists. 
 * context.geo full reference can be found here: https://docs.authing.cn//authing/extensibility/pipeline/context-object .
 */

async function pipe(user, context, callback) {
  // 请先判断是否成功获取 context.ip
  if (context.request.ip) {
    user.addCustomData('latestIp', JSON.stringify(context.request.ip))
    user.addCustomData("latestLocation", JSON.stringify(context.request.geo))
  }
  callback(null, user, context)
}
