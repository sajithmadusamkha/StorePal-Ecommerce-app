const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
require("./connection.js");
const io = new Server(server, {
  cors: "*",
  methods: "*",
});

const User = require("./models/User.js");
const userRoutes = require("./routes/userRoutes.js");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);

server.listen(process.env.PORT, () => {
  console.log("server running at port", process.env.PORT);
});
