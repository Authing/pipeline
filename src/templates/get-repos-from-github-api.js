
/**
 * @title_zh 使用 GitHub API 获取用户信息
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 扩展用户字段
 * @overview_zh 当用户通过 GitHub 方式注册（ context.connection === "social:github"）时，调用 Github API (https://api.github.com/users/$username) 获取用户信息，将其保存至用户的 Metadata 。
 * 更多 GitHub API 请见：https://developer.github.com/v3/ .
 *
 */

async function pipe(user, context, callback) {
  // 使用 GitHub 登录/注册
  if (context.conection === "social:github") {
    // 我们推荐使用 try/catch 包裹有可能 raise exception 的代码段
    try {
      // user.username 就是用户的 GitHub 用户名
      const res = await axios.get(`https://api.github.com/users/${user.username}/repos`)
      const repos = res.data
      user.addMetaDataAndPersist("repos", JSON.stringify(repos))
    } catch (error) {
      log(error)
    }
  }
  callback(null, user, context)
}
