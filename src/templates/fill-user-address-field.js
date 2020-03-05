
/**
 * @title_zh 补充用户地理位置信息字段
 * @title_en Fill User Address Field
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 扩展用户字段
 * @category_en Extend UserInfo
 * @overview_zh 根据 context.geo 更新用户地理位置信息字段。
 * context.geo 字段详细内容请见：https://docs.authing.cn//authing/extensibility/pipeline/context-object
 * @overview_en Update User address related field based on content.geo .
 * context.geo full reference can be found here: https://docs.authing.cn//authing/extensibility/pipeline/context-object .
 */

async function pipe(user, context, callback) {
  if (context.geo) {
    const geo = context.geo;
    user.address = geo.address
    user.region = geo.address_detail.province
    user.locality = geo.address_detail.city
    user.postalCode = geo.address_detail.city_code
  }
  callback(null, user, context)
}
