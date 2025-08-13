const Conversation = require("../model/conversation");

exports.newConversation = async (req, res) => {
  try {
    console.log("in setting");
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return console.log("conversation already exists");
      //   return res.status(200).json("conversation already exists");
    }

    const newconversa = new Conversation({
      members: [senderId, receiverId],
    });

    await newconversa.save();
    return console.log("new conversation saved ");
  } catch (error) {
    console.log("error occured while setting conversation in controller ");
  }
};

exports.getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    let conversation = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
