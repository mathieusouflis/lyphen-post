//AUTH IMPORTS
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "/pages/api/auth/[...nextauth]"

const sessionValidator = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
  return session ? true : false
}

module.exports = { sessionValidator }