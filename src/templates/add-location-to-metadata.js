
/**
 * @title_zh 将用户最新位置信息写入 Metadata
 * @type POST_AUTHENTICATION
 * @category 扩展用户字段
 * @overview_zh 将用户最新位置信息写入 Metadata, 使用前请务必判断 context.geo 是否存在 .
 * context.geo 字段详细内容请见：https://docs.authing.cn//authing/extensibility/pipeline/context-object
 */

async function pipe(user, context, callback) {
  // 请先判断是否成功获取 context.ip
  if (context.ip) {
    user.addMetaDataAndPersist('latestIp', JSON.stringify(context.ip))
    user.addMetaDataAndPersist("latestLocation", JSON.stringify(context.geo))
  }
  callback(null, user, context)
}
