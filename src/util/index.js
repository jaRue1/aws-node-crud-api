const fs = require("fs")
const candidates = require("../../data.json")
exports.handleWriteFile = (data) => {
  if(data){
    const jsonData = JSON.stringify(data)
    fs.writeFile("data.json", jsonData, (err) => console.error(err))
  }
  const jsonData = JSON.stringify(candidates)
  fs.writeFile("data.json", jsonData, (err) => console.error(err))
}
