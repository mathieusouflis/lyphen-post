const apiValidator = (apiKey, res) => {
  return apiKey === process.env.API_KEY ? true : () => {
    console.log("Api Key manquante !");
    res.send("Unauthorised")
    res.end()
  }
}

module.exports = { apiValidator }