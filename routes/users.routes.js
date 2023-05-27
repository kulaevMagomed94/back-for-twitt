const { Router } = require("express");
const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("/user", userController.createUser);
router.patch("/user/:id/saves/:twittId", userController.savedTwitt);
router.patch("/user/:id/delete-saves/:twittId", userController.deleteSavedTwitt);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
