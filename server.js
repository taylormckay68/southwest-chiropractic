require('dotenv').config();
const express = require('express')
    , path = require('path')
    , bodyParser = require('body-parser')
    , port = process.env.PORT || 8080
    , app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

//for hosting
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, './build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));