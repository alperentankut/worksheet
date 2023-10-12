import { connect } from "mongoose";

const connectDatabase = ()=>{
    const uri = "mongodb+srv://alptan:At7289621-@cluster0.fr4c73s.mongodb.net/?retryWrites=true&w=majority"
    connect(uri)
    .then(()=>{
        console.log("MongoDb Connection Successful")
    })
    .catch(err=>{
        console.error(err)
    })
}
connectDatabase()