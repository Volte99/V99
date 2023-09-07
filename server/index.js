const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io")
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: [ "GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    //listen for incoming messgages
    socket.on("chat message", (data) => {
        socket.broadcast.emit("receive_message", data); 
    })
});

//connecting to database(mongoDb)
const connectDb = async () => {
    try {
      const res = await mongoose.connect(process.env.DATABASE_URI);
      if (res) console.log("connected to mongodb");
    } catch (err) {
      console.log(err);
    }
  };
  connectDb();
        


//start the server
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`SERVER IS LISTENING ${port}`);
});