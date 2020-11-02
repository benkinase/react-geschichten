const Story = require("../models/Story");

const connfirmOwner = (story, user) => {
  if (!story.user.equals(user.userId)) {
    res.send("This is not allowed!");
  }
};

// @route   POST /stories
module.exports.createStory = async (req, res) => {
  const { title, content, user, status } = req.body;
  try {
    req.body.user = req.user._id;
    const story = new Story({
      title,
      user,
      content,
      status,
    });
    //console.log(story);
    const newStory = await story.save();
    return res.status(200).send({
      success: true,
      message: "Story successfully created",
      storyId: newStory._id,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      success: false,
      error: err.message,
    });
  }
};

// @route   GET /stories
module.exports.getPublicStories = async (req, res) => {
  try {
    const stories = await Story.find({ status: "public" })
      .populate("user")
      .sort({ createdAt: "desc" })
      .lean();

    res.json(stories);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ success: false, message: " Error in loading stories." });
  }
};

// @route   GET /stories/:id
module.exports.getStory = async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).populate("user").lean();

    if (!story) {
      return res.json({ message: "Story not found!" });
    }
    res.json(story);
  } catch (err) {
    //console.error(err);
    res.status(404).json({ success: false, message: err.message });
  }
};

// @route   GET /stories/edit/:id
module.exports.editStory = async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).lean();

    if (!story) {
      return res.json({ success: false, message: "Story not found/404!" });
    }
    if (story.user != req.user.userId) {
      res.json({ success: false, message: "Unauthorized action!" });
    } else {
      res.json(story);
    }
  } catch (err) {
    console.error(err);
    res.status(404).json({ success: false, message: err.message });
  }
};

// @route   PUT /stories/:id
module.exports.updateStory = async (req, res) => {
  console.log(req);
  try {
    let story = await Story.findById(req.params.id).lean();
    if (!story) {
      return res.status(404).json({ success: false, message: err.message });
    }
    const updatedstory = await Story.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (updatedstory) {
      return res.status(200).send({
        success: true,
        message: "Story successfully updated",
        data: updatedstory,
      });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ success: false, message: " Error in updating story." });
  }
};

// @route   DELETE /stories/:id
module.exports.deleteStory = async (req, res) => {
  let storyId = req.params.id;
  let userId = req.user.userId;
  try {
    let story = await Story.findById(storyId).lean();
    //console.log(req.params.id);
    if (!story) {
      return res.json({ success: false, message: "Story not found!" });
    }
    //console.log(req.user._id);
    if (story.user.equals(userId)) {
      const deletedStory = await Story.deleteOne(story);
      res.status(200).send(deletedStory);
    } else {
      res.send({ success: false, message: "Unauthorized action!" });
    }
  } catch (err) {
    console.error(err);
    res.status(404).json({ success: false, message: err.message });
  }
};

// @route   GET /stories/user/:userId
module.exports.getUserStories = async (req, res) => {
  let userId = req.params.userId;
  try {
    let stories = await Story.find({
      user: userId,
      status: ["private", "public"],
    })
      .populate("user")
      .lean();
    res.json(stories);
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
};

module.exports.likeStory = async (req, res) => {
  let story = await Story.findById(req.params.storyId).lean();
  console.log(story, req.user._id);
  if (!story) {
    return res.json({ success: false, message: "Story not found!" });
  }
  try {
    const likedStory = await Story.findOneAndUpdate(
      { _id: req.params.storyId },
      { $push: { likes: req.user.userId } },
      { new: true }
    );
    res.json(likedStory);
  } catch (error) {
    return res.status(422).json({ message: error });
  }
};

// Unlike story
module.exports.unlikeStory = async (req, res) => {
  let story = await Story.findById(req.params.storyId).lean();

  if (!story) {
    return res.json({ success: false, message: "Story not found!" });
  }
  try {
    const unlikedStory = await Story.findOneAndUpdate(
      { _id: req.params.storyId },
      { $pull: { likes: req.user.userId } },
      { new: true }
    );
    res.json(unlikedStory);
  } catch (error) {
    return res.status(422).json({ error: error });
  }
};

// comment on a story
module.exports.comment = async (req, res) => {
  let story = await Story.findById(req.params.storyId).lean();
  if (!story) {
    return res.json({ success: false, message: "Story not found!" });
  }

  const comment = {
    text: req.body.text,
    user: req.user._id,
    username: req.user.username,
    email: req.user.email,
  };

  try {
    const commentedStory = await Story.findOneAndUpdate(
      { _id: req.params.storyId },
      { $push: { comments: comment } },
      { new: true }
    );
    res.json(commentedStory);
  } catch (error) {
    return res.status(422).json({ success: false, message: error.message });
  }
};
