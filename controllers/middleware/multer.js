const multer = require("multer");
const path = require("path");
const _dir_=path.resolve();
const util = require("util");


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
      // kirim file ke folder upload
      cb(null, _dir_ + "/public/images")
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()} - ${file.originalname}`);
    }
  });

  function checkFileType(request,file, collback) {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) {
      return collback(null, true);
    } else {
      cb("Error: Images Only !!!");
    }
  }

// single images
const singleImage = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: checkFileType
    }
  ).single("imageUrl");  // file model image

//   multi image
  const multipleImage = multer({
    storage: storage,
    // limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).array("imageUrl");  // file model image
  

  const singleImagePromise = util.promisify(singleImage) 
  module.exports = { singleImagePromise, multipleImage };