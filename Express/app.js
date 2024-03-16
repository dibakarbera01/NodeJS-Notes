const express  = require('express')

// const morgan = require('morgan')

const myMiddlewareFunction=require('./middlewares/middle')
const myMiddlewareFunction2=require('./middlewares/middletwo')

const app = express()

// get, post , put, delete

app.use(express.json())

app.use(myMiddlewareFunction)

app.use(myMiddlewareFunction2)

// app.use(morgan('tiny'))

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

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.post('/courses',(req,res)=>{
    const course={
        id:courses.length+1,
        name : req.body.name

    }
    courses.push(course)
    res.send(course)
}) // create


// put method
app.put('/courses/:coursename',(req,res)=>{
    let course =courses.find(course=>course.name===req.params.coursename)
    if(!course) res.status(404).send("Course not exixts")
    course.name=req.body.name
    res.send(course)
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
app.get('/courses/:coursename',(req,res)=>{
    console.log(req.params.coursename)
     let course =courses.find(course=>course.name===req.params.name)
    //  res.send(course)
     if(!course) res.status(404).send("Course not exixts")
     res.send(course)
})


// delete method
app.delete('/courses/:coursename',(req,res)=>{
    let updatedCourses =  courses.filter(course => course.name !== req.params.coursename)

    courses = updatedCourses
    res.send(courses)
})

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('Port is running on 3000')
})
