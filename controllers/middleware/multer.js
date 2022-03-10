const multer = require("multer");
const path = require("path");
const _dir_=path.resolve();
const util = require("util");


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
      // sesuaikan dengan direktori 
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
      cb("Error: Images Only !!!");  // sesuai kan error
    }
  }

// single File
const singleFile= multer({
    storage: storage,
    limits: { fileSize: 1000000 },  // sesuai kan file dalam kb
    fileFilter: checkFileType
    }).single("imageUrl");  // sesuaikan dengan Model image 

//   multi image
  const multipleFile = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // sesuai kan file dalam kb
    fileFilter: checkFileType
    }).array("imageUrl");   // sesuai kan file dalam kb
  

  const singleFilePromise = util.promisify(singleFile) 
  const MultipleFilePromise = util.promisify(multipleFile) 
  module.exports = { singleFilePromise, MultipleFilePromise };