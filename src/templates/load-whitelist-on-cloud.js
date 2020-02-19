
/**
 * @title_zh 通过 API 动态加载白名单
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 访问控制
 * @overview_zh 通过 API 动态加载白名单. 比如你可以将白名单手机号写入一个 txt 文件，让外界可以通过 url 获取。
 *
 */

async function pipe(user, context, callback) {
  const res = await axios.get('https://yourdomain.com/whitelist.txt')
  const whitelist = res.data.split('\n')
  const email = user.email
  if (!email || whitelist.indexOf(email)) {
    return callback(new Error("Access Denied!"))
  }
  callback(null, user, context)
}
