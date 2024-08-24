import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.NEXT_URL_MONGO_DB)
        console.log("connected to Mongo DB");

    } catch (err) {
        console.log(err);

    }
}

export default connectDb;