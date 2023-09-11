const express = require("express");
const app = express();
const UsersRoutes = require("./routes/users")
const http = require("http");
const { Server } = require("socket.io")
const cors = require("cors");
const connectDb = require("./db/connection")
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(UsersRoutes);
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

        
connectDb();
//start the server
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`SERVER IS LISTENING ${port}`);
});