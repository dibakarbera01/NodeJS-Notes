//files

const fs = require('fs')


// reading a file

let fileContent = fs.readFileSync('f2.txt')

console.log("data of file f2 :- ", fileContent) // output buffer formate
console.log("data of file f2 :- "+ fileContent) // output in string +

// writing a file

fs.writeFileSync('f3.txt','This is content')
console.log("file written")



// append or update a file

fs.appendFileSync('f3.txt','of check update data')
console.log("file append")


// delete a file

fs.unlinkSync('f2.txt')
console.log("file has been deleted")