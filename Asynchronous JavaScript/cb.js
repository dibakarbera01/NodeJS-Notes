const fs = require('fs')

console.log("First Line")


// let data = fs.readFileSync('f1.txt')
// console.log("File one data -> "+data)

// let data2=fs.readFileSync('f2.txt')
// console.log("File Two Data -> "+data2)



fs.readFile('f1.txt', cb1)
// asynchronous method
function cb1(err, data) {
    if (err) {
        console.log(err)
    }
    console.log("File 1 data->" + data)
}

fs.readFile('f2.txt', cb2)
function cb2(err, data) {
    if (err) {
        console.log(err)
    }
    console.log("File 1 data->" + data)
}

console.log('Last Line')



fs.readFile('f3.txt', cb2)
function cb2(err, data) {
    if (err) {
        console.log(err)
    }
    console.log("File 3 data->" + data)
}

console.log('Last Line')