const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.port;
const host = process.env.host;
const bodyParser = require("body-parser"); //use to parse incoming request bodies


const urlServices = require("./services/urlService");
const db = require("./data-access/db");
const urlDb = require("./data-access/urlDb");

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log("listening port " + port));