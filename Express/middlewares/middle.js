function myMiddleware(req,res,next){
    console.log("I am second middleware")
    next()
}

module.exports=myMiddleware