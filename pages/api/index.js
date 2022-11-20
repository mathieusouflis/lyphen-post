const { apiValidator } = require("/lib/validators/apiValidator.js")

export default function handler(req, res) {
  apiValidator(req.body.apiKey, res)
  res.status(200).json({ name: 'Hello World !' })
}
