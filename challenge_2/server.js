const getCSV = require('./client/app.js')
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));

app.post('/csv', (req, res) => {
  // console.log(getCSV(json));
  res.set('Content-Type', 'text/plain')
  res.status(201).send(getCSV(req));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})