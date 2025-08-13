const express = require("express");
const Route = express.Router();
const RController = require("../Controller/routeController");

const CController = require("../Controller/conversation");

const MController = require("../Controller/messages");

const imageController = require("../Controller/imageController");

const upload = require("../utils/upload");

Route.post("/add", RController.postadd);
Route.get("/users", RController.getusers);

Route.post("/conversation/add", CController.newConversation);
Route.post("/conversation/get", CController.getConversation);

Route.post("/message/add", MController.newMessage);
Route.get("/message/get/:id", MController.getMessage);

Route.post("/file/upload", imageController.fileupload);
// Route.post("/file/upload", upload.single("file"), imageController.fileupload);
Route.get("/file/:filename", imageController.getimage);

module.exports = Route;
