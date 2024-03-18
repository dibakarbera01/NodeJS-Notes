// how to produce a promise

let myPromise = new  Promise(function(resolve,reject){
    const a =4;
    const b =3;

    setTimeout(()=>{
        if(a==b){
            resolve('the value equal')
        }
        else{
            reject('not equal')
        }
    },2000)
})


// pending state
// console.log(myPromise)


// promises fulfilled -> then method
// consuming your promises
myPromise.then(function(result){
    console.log(result)
}) //fulfilled state

myPromise.catch(function(failedResult){
    console.log(failedResult)
}) // rejected state