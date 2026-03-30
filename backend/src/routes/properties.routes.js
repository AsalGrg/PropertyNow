const express = require('express')
const {addProperty, getAllProperties}= require ('../controllers/property.controller')


const router= express.Router();
router.post('/create', addProperty)
router.get('/all', getAllProperties)

module.exports= router