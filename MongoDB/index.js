const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase').then(() => console.log("connection is successful")).catch(err => console.error('couldnt connect to mongodb', err))

//Schema

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 200 },  //course
    tags: {type:Array, validate:{
        validator:function(tags){
            return tags.length > 1
        }
    }},                                               //tags
    category: {
        type: String,
        required: true,
        enum: ['DSA', 'Web', 'Mobile', 'Data Science']
    },
    creator: { type: String, required: true },
    publishedDate: { type: Date, default: Date.now },
    isPublished: { type: Boolean, required: true },
    rating: {
        type: Number, required: function () {
            return this.isPublished
        }
    }
})


const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: "MongoDB",
        tags: ['express', 'mongodb'],
        category: 'Web',
        creator: "Adam",
        isPublished: true,
        rating: 4.5
    })
    try {
        // await course.validate()
        const result = await course.save()
        console.log(result)
    } catch (error) {
        // console.error(error.message)
        for (field in error.errors){
            console.log(error.errors[field])
        }
    }

} //create data

createCourse()



// comparison operator :-
// eq(equal)
// gt (greater then)
// gte (greater than equal to)
// lt (less than)
// lte  (less tan equal to)
// in 
// not in


/*
 Logical Operator:-
   1. or
   2. and
 */

async function getCourses() {
    // const courses = await Course.find({ creator: "Dibakar" }).select({ name: 1, publishedDate: 1 }).sort({ name: 1 })

    // const courses = await Course.find({ rating: {$in:[4.3, 4.2]} }).select({ name: 1, publishedDate: 1 })

    // const courses = await Course.find({ rating: {$in:[4.5,4.3, 4.2]} }).select({ name: 1, publishedDate: 1 }).or([{creator:"Dibakar"},{rating:2}])

    const courses = await Course.find({ rating: { $in: [4.5, 4.3, 4.2] } }).select({ name: 1, publishedDate: 1 }).and([{ creator: "Dibakar" }, { rating: 4.5 }],)



    console.log(courses)

} // reading data

// getCourses()



async function updateCourse(id) {

    let course = await Course.findById(id)
    if (!course) return;

    course.name = "HTML"
    course.creator = "Steve"

    const updateCourse = await course.save()

    console.log(updateCourse)
} //update data

// updateCourse('66184101d0ce06447a5c9c49')



//deleting
async function deleteCourse(id) {
    let course = await Course.findByIdAndDelete(id)

    console.log(course)
} // delete data

// deleteCourse('66184101d0ce06447a5c9c49')