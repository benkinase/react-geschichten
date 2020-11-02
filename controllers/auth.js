const User = require("../models/User");
const Story = require("../models/Story");
const bcrypt = require("bcrypt");
const { getToken } = require("../middleware/auth");

// register new user
module.exports.createUser = async (req, res) => {
  const { username, email, password, image } = req.body;
  console.log(req.body);
  if (!email || !password || !username) {
    return res
      .status(422)
      .send({ success: false, message: "Please fill all the fields" });
  }
  if (password.length < 6) {
    return res.status(422).send({
      success: false,
      message: "Password must be atleast 6 characters",
    });
  }

  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    return res.status(422).send({
      success: false,
      message: `Username ${username} is already in use!`,
    });
  }
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res
      .status(422)
      .send({ message: `Username ${email} is already registered!` });
  }

  const user = new User({ username, email, password, image });
  try {
    const newUser = await user.save();
    if (newUser) {
      res.status(201).send({
        success: true,
        message: "Success! You have signed up",
      });
    } else {
      res.status(500).send({ message: "User creation unseccessful" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// sign in existing user
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({
      success: false,
      message: "Please fill in all fields",
    });
  }
  if (!email.includes("@")) {
    return res.status(422).send({
      success: false,
      message: "Please enter a valid email",
    });
  }
  // user exist
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(422)
        .send({ success: false, message: `No user with ${email} found!` });
    }
    // compare hashed password
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      console.log(true);
      res.send({
        success: true,
        _id: user._id,
        userId: user._id,
        date: user.createdAt,
        image: user.image,
        username: user.username,
        email: user.email,
        message: "Boom! User is now logged in!.",
        token: getToken(user),
      });
    } else {
      return res
        .status(401)
        .send({ success: false, message: "Incorrect password!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({ success: false, message: err.message });
  }
};

// get user
module.exports.getUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "User not found!" });
    }
    res.json(user);
  } catch (err) {
    //console.error(err);
    res.status(404).json({ success: false, message: err.message });
  }
};

// get all users
module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ success: false, message: err.message });
  }
};
// @route   DELETE /user/:id and associated stories
module.exports.deleteUser = async (req, res) => {
  let userId = req.user.userId;
  console.log(req.params.id);
  console.log(req.user.userId);
  let user = await User.findById({ _id: req.params.id }).lean();
  let stories = await Story.find({ user: userId });
  console.log(user, stories);
  if (!user) {
    return res.send({ success: false, message: "User not found!" });
  }
  try {
    await User.deleteOne(user);
    await Story.deleteMany({ stories });
    return res
      .status(200)
      .send({ success: true, message: "User successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(404).json({ success: false, message: err.message });
  }
};

// // @route   DELETE /user/:id and associated stories
// module.exports.deleteUser = async (req, res) => {
//   try {
//     //let userId;
//     let user = await User.findById(req.params.id).lean();
//     //console.log(req.params.id);

//     if (!user) {
//       return res.send({ success: false, message: "User not found!" });
//     }
//     //console.log(req.user._id);
//     if (user._id == req.user._id) {
//       const deletedUser = await User.remove(user);
//       const deletedUserStories = await Story.remove({ user: user._id });
//       res.json(deletedUser, deletedUserStories);
//     } else {
//       res.send({ success: false, message: "Unauthorized action!" });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(404).json({ success: false, message: err.message });
//   }
// };
