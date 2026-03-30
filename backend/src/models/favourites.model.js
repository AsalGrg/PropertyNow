const mongoose= require('mongoose')

// creating a favourites model schema
const favouritesSchema= mongoose.Schema({
    userId: {type: String, required: true},
    propertyId: {type: String, required: true}
})


// creating a FavouritesModel using the following schema
const FavouritesModel= mongoose.model('favourites', favouritesSchema)

// exporting the FavouritesModel
module.exports= FavouritesModel