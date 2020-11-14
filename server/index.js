const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
var cors = require('cors')

// get env vars
const dotenv = require('dotenv');
dotenv.config();

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Allow CORS
app.use(cors())
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});