const express = require("express");
const router = express.Router();
const {
  home,
  createUser,
  editUser,
  deleteUser,
  getUsers,
} = require("../controllers/userControllers");

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUser/:id", editUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
