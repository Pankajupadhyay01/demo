import dbconn from "./config/dbconn.js";
import app from "./app.js";

dbconn();
app.listen(4000, () => {
    console.log("Server is running on port 8080");
});