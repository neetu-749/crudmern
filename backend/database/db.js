import mongoose from "mongoose";


const Connection=async(username,password)=>{

    const URL="mongodb+srv://<DB_USERNAME>:<DB_PASSWORD>@cluster0.6e7csob.mongodb.net/crud_api?retryWrites=true&w=majority";

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database connected successfully");
    }catch(error){
        console.log('Error while connecting database', error)
    }

}

export default Connection;
