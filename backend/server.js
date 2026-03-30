require('dotenv').config()
const app = require('./src/app')
const connectDB = require('./src/db/db')


// calling connectDB to connect to db, in intialization
connectDB();


// starting the initialized server
app.listen(3200, ()=>{
    console.log("Server is now running in port 3200")
})