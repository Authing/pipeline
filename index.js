const fs = require("fs")

module.exports.handler = (request, response, context) => {
  response.setStatusCode(200)
  response.setHeader('content-type', 'application/json')
  let data = fs.readFileSync('./templates.json', 'utf8')
  data = JSON.parse(data)
  response.send(JSON.stringify(data))
}
