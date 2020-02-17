/**
 * @title_zh 持久化保持自定义字段到数据库
 * @type POST_REGISTER,POST_AUTHENTICATION 
 * @category 扩展用户字段
 * @overview_zh 持久化保持自定义字段到数据库
 * 
 *
 */

async function pipe(user, context, callback) {
  user.addMetaData('KEY1', 'VALUE1')
  user.addMetaDataAndPersist('KEY2', 'VALUE2')
  callback(null, user, context)
}