
// Directories

//create a directories

console.log("DMS")

const fs = require('fs')

// fs.mkdirSync('myTest') // create a director


// check the content inside

// let folderPath=''
// let foldercontent=fs.readdirSync(folderPath)
// console.log("folder content:- "+foldercontent)


// check directory exist or not

// const doesExist = fs.existsSync("myTest1")
// console.log(doesExist)

// remove director
fs.rmdirSync('myTest')
console.log("File deleted")