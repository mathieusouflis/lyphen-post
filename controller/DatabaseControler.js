const mongoose = require("mongoose")

class DatabaseControler {
  static async connect(url) {
    return await mongoose.connect(url)
  }
}

module.exports = { DatabaseControler }