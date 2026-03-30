const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes')
const propertyRoutes = require('./routes/properties.routes')
const favouriteRoutes = require('./routes/favourites.routes')
// initializing an express server
const app= express();

// adding json middleware to be able to json request
app.use(express.json())

// adding cors middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))

// adding cookie parser middleware
app.use(cookieParser())


// declaring all routes
app.use('/api/auth', authRoutes)
app.use('/api/property', propertyRoutes)
app.use('/api/favourite', favouriteRoutes)

// exporting app
module.exports= app