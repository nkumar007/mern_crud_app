// Our buisness logic goes here

const User = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Welcome!");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      throw new Error("All the field need to be filled");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("This user already exists");
    }
    const user = await User.create({ name, email });
    res.status(200).json({
      success: true,
      message: "User created",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
