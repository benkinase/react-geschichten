const express = require("express");
const router = express.Router();
const { isAuth } = require("../middleware/auth");
const storyController = require("../controllers/story");

router.use(express.json());

router.get("/", storyController.getPublicStories);
router.get("/:id", isAuth, storyController.getStory);
router.post("/new", isAuth, storyController.createStory);
router.get("/user/:userId", isAuth, storyController.getUserStories);
router.get("/edit/:id", isAuth, storyController.editStory);
router.put("/update/:id", isAuth, storyController.updateStory);
router.delete("/remove/:id", isAuth, storyController.deleteStory);
router.put("/like/:storyId", isAuth, storyController.likeStory);
router.put("/unlike/:storyId", isAuth, storyController.unlikeStory);
router.put("/comment/:storyId", isAuth, storyController.comment);

module.exports = router;
