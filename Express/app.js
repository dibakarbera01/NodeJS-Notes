const express  = require('express')

const app = express()

// get, post , put, delete

const courses=[
    {id:1,name:"Javascript"},
    {id:2,name:"Java"},
    {id:3,name:"Python"},
]

app.get('/', (req,res)=>{
    res.send('Hello from scaler Topics')
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.get('/contact',(req,res)=>{
    res.send("This is contact page")
})



// Route Parameters -->

// app.get('/courses/:id',(req,res)=>{
//     // console.log(req.params)
//     res.send(req.params.id)
// })



// handling multiple routes -->

// app.get('/courses/:id',(req,res)=>{
//     //console.log(req.params)
//      let course = courses.find(course => course.id ===parseInt(req.params.id))
//      res.send(course)
// })
app.get('/courses/:name',(req,res)=>{
    console.log(req.paramscoursename)
     let course =courses.find(course=>course.name===req.params.name)
    //  res.send(course)
     if(!course) res.status(404).send("Course not exixts")
     res.send(course)
})




const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('Port is running on 3000')
})
