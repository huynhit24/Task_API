const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config();

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

connectDB();

app.use('/api/task/auth', require('./routes/user'));
app.use('/api/task', require('./routes/task'));

const PORT = process.env.PORT || 3000;

app.listen(PORT,
    console.log(`Server running mode on port ${PORT}`.red.underline.bold)
);