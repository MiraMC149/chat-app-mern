const express = require('express');
const app = express();
const upload = require('./fileupload');

app.use(express.json());

// Serving front-end build files
app.use(express.static(__dirname + '/../build'));

// Route for file upload
app.post('/api/uploadfile', upload.single('myFile'), (req, res, next) => {
  console.log(req.file.name + ' file successfully uploaded!');
  res.sendStatus(200);
});

app.listen(3001, () => console.log('Listening on port 3001'));