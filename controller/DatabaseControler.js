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

    connection.isConnected = db.readyState

  }
}
module.exports = { DatabaseControler }
