import mongoose from "mongoose";
import app from "./app"


const connectedDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);

        app.listen(process.env.PORT, () => {
            console.log(`Example app listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error( "Database connection failed" , error)
        process.exit(1)
    }
}
export default connectedDB;