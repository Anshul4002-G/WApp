const User = require("../model/User");

exports.postadd = async (req, res) => {
  try {
    let exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
      console.log("user already exists");
      res.status(200).json({ msg: "user already exists" });
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    console.log("error occ", error);
  }
};

exports.getusers = async (req, res) => {
  try {
    console.log("fetching data in route");
    const users = await User.find({});
    console.log("successfully fetched data ");
    return res.status(200).json(users);
  } catch (error) {
    console.log("error in fgetchi8ng user ");
  }
};
