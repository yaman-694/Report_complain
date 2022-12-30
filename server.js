const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const input = require('./routes/input')
const config = require('./config/mongoDB')
const mongoose = require('mongoose')
const xlsx = require('xlsx');
const Report = require('./model/input')
const download = require('./routes/routes.download')
const search = require('./routes/search')
const cors = require('cors')
mongoose.set('strictQuery', false);

//connect to mongoDB
mongoose.connect(config.mongo.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



//Set View engine
app.set("view engine", "ejs");

//set public folder static
app.use(express.static('public'));
app.use(cors());

//set middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
require("dotenv").config();

//set routes
app.use('/api/v1',input);
app.use('/api/v1',download);
app.use('/api/v1',search);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    });