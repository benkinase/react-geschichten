const { Router } = require("express");
const authController = require("../controllers/auth");
const { isAuth } = require("../middleware/auth");

const router = Router();

router.post("/signup", authController.createUser);
router.post("/login", authController.loginUser);
router.get("/profile/:id", authController.getUser);
router.delete("/profile/:id", isAuth, authController.deleteUser);
//router.get("/all", isAuth, authController.getUsers);

module.exports = router;
