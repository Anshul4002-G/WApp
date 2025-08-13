const Message = require("../model/message");
const Conversation = require("../model/conversation");

exports.newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();

    await Conversation.findByIdAndUpdate(req.body.ConversationId, {
      message: req.body.text,
    });

    return res.status(200).json("message saved succeswsffully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

exports.getMessage = async (req, res) => {
  try {
    const message = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json("unable to fetch merssages");
  }
};
