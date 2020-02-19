
/**
 * @title_zh 补充用户地理位置信息字段
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 扩展用户字段
 * @overview_zh 根据 context.geo 更新用户地理位置信息字段。
 *
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
