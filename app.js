//initial packages initialisations
require('dotenv').config();
const express = require("express");
const app = express();
const colors = require("colors");
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT;
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const server = require('http').Server(app);
const jwt = require("jsonwebtoken");
const socket_io = require("./config/socket_io")
const sendMail = require("./nodemailer")
// const fileStorage = require("./FileUpload/filestoregeRouts")

//socket connection
// io.on('connection', (socket) => {
//     try {
//         var id = socket.id;
//         console.log(`A user Connected to socket id : ${id}`);
//         socket.on('disconnect', msg => {
//             console.log(`A user Disconnected of id : ${id}`);
//         });
//         socket.emit("Hello");
//     } catch (error) {
//         console.error(error);
//         console.log(error);
//         res.send(404);
//     }
// })

// io.on("submitted", () => {
//     console.log("File submitted");
// })
//end socket

//routes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(static_path));
app.use(cors());

app.get("/", (req, res) => {
    try {
        res.send("Hi");
        res.send(200 + " API is running");
    }
    catch (err) {
        res.send(404);
        console.log(err);
    }
});

app.get("/mail").post(sendMail);
app.use(notFound);
app.use(errorHandler);
//end routes

//server listen
server.listen(PORT, (err) => {
    console.log(`Server listioning on http://localhost:${PORT}`);
    if (err) console.log(err);
});