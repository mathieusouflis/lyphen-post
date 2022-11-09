// const mongoose = require("mongoose")

// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   )
// }

// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }


// class DatabaseControler {
//   static async connect() {
//     if (cached.conn) {
//       return cached.conn
//     }

//     if (!cached.promise) {
//       const opts = {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
//       }

//       cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
//         return mongoose
//       })
//     }
//     cached.conn = await cached.promise
//     return cached.conn
//   }
// }

// module.exports = { DatabaseControler }


import mongoose from 'mongoose'

const connection = {} /* creating connection object*/
class DatabaseControler {
  static connect = async () => {
    /* check if we have connection to our databse*/
    if (connection.isConnected) {
      return
    }

    /* connecting to our database */
    const db = mongoose.connect(process.env.MONGODB_URI)

    connection.isConnected = db.connections[0].readyState

  }
}

module.exports = { DatabaseControler }