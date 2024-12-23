const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

// middlewares
app.use(express.json());

//routes
app.use("/api/v1/auth", require("./src/routes/authRoutes"));

const port = 5100 || process.env.PORT
//listen port
app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`)
})