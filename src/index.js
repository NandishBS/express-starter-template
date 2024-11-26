import 'dotenv/config'
import connectDB from './db/index.js'
import { app } from './app.js'

connectDB()
.then(()=>{

    app.listen(process.env.PORT || 4000, ()=>{
        console.log("Server is succefully running at PORT : ", process.env.PORT)
    } );

    app.on("error",(err)=>{
        console.log("ERROR :: ", err);
        throw err;
    });
})
.catch((err)=>{
    console.log("ERROR :: ./src/index.js :: MongoDB connection Failed :: ",err);
})