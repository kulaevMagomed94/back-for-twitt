const { Router } = require("express");
const { twittsControllers } = require("../controllers/twitts.controller");

const router = Router();

router.get("/twitts", twittsControllers.getTwitts); 
router.post("/twitt/", twittsControllers.addTwitt); 
router.patch("/twitt/:id/like/:userid", twittsControllers.likeTwitt); 
router.patch("/twitt/:id/delete-like/:userid", twittsControllers.deleteLikeTwitt); 
router.delete("/twitt/:id", twittsControllers.deleteTwitt); 
 
module.exports = router;
