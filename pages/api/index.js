//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

export default async function handler(req, res) {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  res.status(200).json({ name: 'Hello World !' })
  res.end()

}
