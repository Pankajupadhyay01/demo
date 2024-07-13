import mongoose from "mongoose";

const dbconn = () => {
    mongoose.connect(
        "mongodb://localhost:27017"
    );
    mongoose.connection.on("open", () => {
        console.log("Mongodb connected");
    });
    mongoose.connection.on("error", (err) => {
        console.log(err, "Mongodb error");
    });
}

export default dbconn;