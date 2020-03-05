
/**
 * @title_zh 通过 API 动态加载白名单
 * @title_en Load Whitelist On Cloud
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh 通过 API 动态加载白名单. 比如你可以将白名单手机号写入一个 txt 文件，让外界可以通过 url 获取。
 * @overview_en Danymic load whitelist using API, you can add phone number whitlist to a txt file for example .
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
