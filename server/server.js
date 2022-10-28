const express = require("express");
const cookieParser = require("cookie-parser");
const env = require("dotenv").config();
// const mongoose = require("mongoose");
const db = require("./Config/dbConfig");
const userRoute = require('./Routes/userRouter')
const adminRoute = require('./Routes/adminRouter')

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT;
console.log(port)
db();

app.use('/api/users', userRoute)
app.use('/api/admin', adminRoute)

app.listen(port, () => {
  `listening to port ${port}`;
});
