const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (e) {
    if (e.code === 11000) return res.status(400).send("Email already exists");
    res.status(400).send(e.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false }).populate("orders");
    res.json(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  const { user_id } = req.body;
  try {
    const userId = await User.findById(user_id);
    if (!userId.isAdmin) return res.status(401).json("You can't delete Users!");
    await User.findByIdAndDelete(user_id);
    const user = await User.find();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//Get User Orders
router.get("/:id/orders", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate("orders");
    res.json(user.orders);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
