import app from "./app.js";
import { PORT } from "./config.js";
import { connectDb } from "./db.js";


connectDb();


//server
app.listen(PORT, console.log("server on port " + PORT));