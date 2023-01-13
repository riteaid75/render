const router = require("express").Router()
const controller = require("../controller/userController")


router.get("/", controller.getAllUsers)
router.get("/user/:id", controller.getUser)
router.post("/user", controller.createUser)
router.delete("/user/:id", controller.deleteUser)

module.exports = router