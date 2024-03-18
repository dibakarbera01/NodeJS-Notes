function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve('order for coffee received')
        }
        else {
            reject('other coffe reject')
        }
    })
}


function processOrder(order) {
    return new Promise(function (resolve) {
        console.log('order is being processed')
        resolve(`${order} is served`)
    })
}


// promise channing method

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processOrder){
//     console.log(processOrder)
// }).catch(function(err){
//     console.log(err)
// }) //solution with promises



//Async Await both is keywords
async function serverOrder() {
    try {
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced)
        let procesedOrder = await processOrder(orderPlaced)
        console.log(procesedOrder)
    } catch (err) {
        console.log(err)
    }

}

serverOrder()

