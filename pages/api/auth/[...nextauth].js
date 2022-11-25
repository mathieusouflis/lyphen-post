//LIBS IMPORTS
const { compare } = require("bcryptjs")

//AUTH IMPORTS
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

//CONTROLERS IMPORTS
const { DatabaseControler } = require("/controller/DatabaseControler.js")

//MODELS IMPORTS
const { User } = require('/Model/User')

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {

        DatabaseControler.connect()

        const user = await User.findOne({ email: credentials.email }).exec()
        if (!user) throw new Error("User not found")

        const checkPassword = await compare(credentials.password, user.password)
        if (!checkPassword || credentials.email != user.email) throw new Error("Username Or Password doesn't match")

        return user
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  }
})