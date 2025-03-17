import mongoose from "mongoose";


export const connectDB = async()=>{

    try{
        await mongoose.connect('mongodb://localhost:27017/merndb');
        console.log('>>> DB está conectado')
    } catch(error){
        console.log('error en db.js');
    }
};
