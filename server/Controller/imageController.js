const url = "http:localhost:8000";
const grid = require("gridfs-stream");
const { default: mongoose, mongo } = require("mongoose");
const conn = mongoose.connection;

let gfs, gridFsBucket;
conn.once("open", () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  const gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

exports.fileupload = (req, res) => {
  if (!req.file) return res.status(404).json("File not found");
  const imageUrl = `${url}/file/${request.file.filename}`;
  console.log("image url is ", imageUrl);
  res.status(200).json(imageUrl);
};

exports.getimage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readstrem = gridFsBucket.openDownloadStream(file._id);
    readstrem.pipe(res);
  } catch (error) {
    console.log(error);
  }
};
