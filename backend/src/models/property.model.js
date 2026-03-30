const mongoose = require('mongoose')

// creating property model schema
const propertySchema = mongoose.Schema({
    title: {type:String, required: true},
    location: {type: String, required: true},
    addedAt: {
        type:Date,
        default: Date.now
    },
    imageUrl:{type: String, required: true},
    isAvailable: {type: Boolean, default: true},
    price: {type: String, required: true}
})


// creating a PropertiesModel using the following the schema
const PropertiesModel= mongoose.model('properties', propertySchema);


// exporting the PropertiesModel
module.exports= PropertiesModel