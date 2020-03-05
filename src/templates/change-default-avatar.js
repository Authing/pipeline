
/**
 * @title_zh 修改默认头像
 * @title_en Change Default Avatar
 * @type POST_REGISTER
 * @category 扩展用户字段
 * @category_en Extend UserInfo
 * @overview_zh Authing 默认的头像为：https://usercontents.authing.cn/authing-avatar.png .
 * 这里可以修改成你自己想要的默认头像。
 * @overview_en Authing's default avatar url is https://usercontents.authing.cn/authing-avatar.png, you can change it to anything you like .
 */

async function pipe(user, context, callback) {
  user.photo = "https://usercontents.authing.cn/avatar.png"
  callback(null, user, context)
}
