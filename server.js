const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');

// user Routes
const cardRoute = require("./Routes/card");

// App Config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const Database = process.env.MONGO_URL;

// Middalwares
app.use(express.json());        // json data
app.use(cors());                // allow any origin
app.use("/tinder", cardRoute);  // card routes

// DB Config
mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));

// Api endpoints
app.get("/",(req, res) => res.status(200).send("WELCOME TO TINDER PLATEFORM"));
// Listen server
app.listen(PORT,() => console.log(`Server Running On Port ${PORT}`));