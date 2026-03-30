const mongoose= require('mongoose')


// function to connect to database
async function connectDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        // console logging a success message
        console.log("Connected to database successfully")
    }catch(err){
        console.log("Error connecting to the database")
    }

}

module.exports= connectDB;

