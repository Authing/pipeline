/**
 * @title_zh 添加自定义用户 Metadata
 * @title_en Add Custom Meatadata and Persist
 * @type POST_REGISTER,POST_AUTHENTICATION 
 * @category 扩展用户字段
 * @category_en Extend UserInfo
 * @overview_zh 为用户添加自定义字段 Metadata，并可以持久化保存至数据库。
 * user.addMetaData("KEY","VALUE") 仅对当前请求有效。
 * user.addMetaDataAndPersist("KEY", "VALUE") 会保存至数据库。
 * @overview_en Add custome user metadata, and persist it to database .
 * user.addMetaData("KEY","VALUE") do not persist to database, means it only available in current request .
 * user.addMetaDataAndPersist("KEY", "VALUE") however will persist to database .
 */

async function pipe(user, context, callback) {
  user.addMetaData('KEY1', 'VALUE1')
  user.addMetaDataAndPersist('KEY2', 'VALUE2')
  callback(null, user, context)
}
