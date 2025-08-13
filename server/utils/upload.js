// utils/upload.js
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage"); // Note the new package name!
const dotenv = require("dotenv");

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.epq7b.mongodb.net/WhatsppLogin`;

// Create a new storage engine instance
const storage = new GridFsStorage({
  url: DB_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpeg", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      console.log("Unsupported file type:", file.mimetype);
      // Return a filename for unsupported types, or handle as an error
      return `${Date.now()}-file-${file.originalname}`;
    }

    // Return the GridFS configuration for valid files
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

// Export the multer middleware with the new storage engine
module.exports = multer({ storage });
