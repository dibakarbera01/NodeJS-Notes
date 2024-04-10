const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase').then(()=>console.log("connection is successful")).catch(err=>console.error('couldnt connect to mongodb',err))

//Schema

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate:{type:Date, default:Date.now},
    isPublished:Boolean
})


const Course = mongoose.model( 'Course',courseSchema)

async function createCourse(){
    const course = new Course({
        name : "Java",
        creator:"Bera",
        ispublished:true
    })
    
    const result = await course.save()
    console.log(result)
}

createCourse()