
/**
 * @title_zh 根据 IP 风险评分屏蔽用户
 * @title_en IP Risk Analysis
 * @type POST_REGISTER,POST_AUTHENTICATION
 * @category 访问控制
 * @category_en Access Control
 * @overview_zh IP 风险评分, 这里调用京东云市场的 API: https://wx.jdcloud.com/market/api/12678，如果风险评分大于 80，就屏蔽此用户。
 * @overview_en Ip risk analysis
 */

async function pipe(user, context, callback) {
  try {
    const api = `https://way.jd.com/Dingxiang/ipquery?key=${context.ip}&appkey=${env.LOC_RISK_APPKEY}`
    const res = await axios.get(api)
    const data = res.data
    if (data.code === "10000") {
      const score = data.result.score
      if (score >= 80) {
        // 请不要调用 return callback(new Error())
        // 否则用户的 blocked 字段将不会保持！
        user.blocked = true
      }
    }
  } catch (error) {
    log(error)
  }
  callback(null, user, context)
}
