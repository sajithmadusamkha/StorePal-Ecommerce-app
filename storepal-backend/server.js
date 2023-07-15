const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const server = http.createServer(app);
const { Server } = require("socket.io");
require("./connection.js");
const io = new Server(server, {
  cors: "*",
  methods: "*",
});

const User = require("./models/User.js");
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/OrderRoutes.js");
const imageRoutes = require("./routes/imageRoutes.js");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/images", imageRoutes);

//Payment Endpoint
app.post("/create-payment", async (req, res) => {
  const { amount } = req.body;
  console.log(amount);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
  }
});

server.listen(process.env.PORT, () => {
  console.log("server running at port", process.env.PORT);
});
