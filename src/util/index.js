const fs = require("fs")
const candidates = require("../../data.json")
exports.handleWriteFile = () => {
  const jsonData = JSON.stringify(candidates)
  fs.writeFile("data.json", jsonData, (err) => console.error(err))
}
