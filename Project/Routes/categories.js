const express = require('express')

const mongoose = require('mongoose')


const Joi = require('joi')
const { required } = require('joi/lib/types/lazy')

const router = express.Router()

const categorySchema=new mongoose.Schema({
    name:{type: String, required:true, minlength:3, maxlength:30}
})

const Category =  mongoose.model( 'Category',categorySchema)

// const categories = [
//     { id: 1, name: 'Web' },
//     { id: 2, name: 'Mobile' },
//     { id: 3, name: 'Photography' }
// ];


router.get('/api/categories', async (req, res) => {
    let categories = await Category.find()
    res.send(categories);
});


router.post('/api/categories', async (req, res) => {

    const {error} =validateData(req.body)
    if(error)  return res.status(400).send(error.details[0].message)

    // const category = new Category{
    //     id: categories.length+1;
    //     name : req.body.name
    // }
    const category = new Category({
        name : req.body.name
    })
    // categories.push(category);
    await category.save();
    res.send(category);
});

router.put('/api/categories/:id', async (req, res) => {

    const {error} = validateData(req.body)
    if(error)  return res.status(400).send(error.details[0].message)

    const category = await Category.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})

    // const category = categories.find(c => c.id === parseInt(req.params.id));

    if (!category) return res.status(404).send('The Category is not found');

    // if (error)  return res.status(400).send(error.details[0].message);

    // category.name = req.body.name;

    res.send(category);
})

router.delete('/api/categories/:id', async (req, res) => {

    const category = await Category.findByIdAndDelete(req.params.id)
    // const category = categories.find(c => c.id === parseInt(req.params.id));

    if (!category) return res.status(404).send('Category ID Not Found!');

    // const index = categories.indexOf(category);
    // categories.splice(index, 1);
    res.send(category);
})


router.get('/api/categories/:id', async (req, res) => {
    const category = await Category.findById(req.params.id)
    // const category = categories.find(c => c.id == req.params.id);
    if (!category) return res.status(404).send("The category with the given ID was not found.");
    res.send(category);
})


function validateData(category){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(category, schema);
}


module.exports = router
