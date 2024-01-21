const express = require("express");
const app = express();
const multer  = require('multer')
// setup multer for file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let destinationPath = './build';
  
      if (
        file.name.toLowerCase().endsWith('.png') ||
        file.name.toLowerCase().endsWith('.jpg') ||
        file.name.toLowerCase().endsWith('.jpeg') ||
        file.name.toLowerCase().endsWith('.gif')
      ) {
        destinationPath = './build/uploads/pictures';
      } else if (
        file.name.toLowerCase().endsWith('.mp4') ||
        file.name.toLowerCase().endsWith('.mpeg') ||
        file.name.toLowerCase().endsWith('.quicktime')
      ) {
        destinationPath = './build/uploads/videos';
      }else{
        destinationPath = './build/uploads/docs';
      }
  
      cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.name);
    }
  });
  const upload = multer({ storage: storage });

  module.exports = upload;