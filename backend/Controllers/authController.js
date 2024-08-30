/* eslint-disable no-undef */
import User from "../Models/User/User.js";
import jwt from "jsonwebtoken";

const generatetoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const Signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const currentUser = await User.findOne({ email });

    if (currentUser && (await currentUser.matchPassword(password))) {
      res.json({
        _id: currentUser._id,
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
        token: generatetoken(currentUser._id),
      });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Signup = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "password tidak sama" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "user sudah ada" });
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    if (newUser) {
      res.status(201).json({
        _id: User._id,
        username: User.username,
        email: User.email,
        password: User.password,
        token: generatetoken(User._id),
      });
    } else {
      res.status(400).json({
        message: "invalid user data",
      });
    }
  } catch (error) {
    console.error("gagal mendaftar " + error.message);
  }
};

export { Signin, Signup };
