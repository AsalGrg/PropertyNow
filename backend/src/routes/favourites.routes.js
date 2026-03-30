const express = require('express')
const {addFavourite, getUserFavourites, removeFavourite} = require('../controllers/favourites.controller')
const router= express.Router();


router.post('/:propertyId', addFavourite)
router.delete('/:propertyId', removeFavourite)
router.get('/all', getUserFavourites)


module.exports= router