/***** Dependencies ********/
const express = require('express');
const env = require('dotenv').config();
const path = require('path');

/******* Global Variables *********/
const app = express();
const PORT = process.env.PORT;
const frontend = __dirname + '/../frontend/'

/******** Middleware **********/
app.use(express.static('../frontend'))


/******** Routing *******/
app.route('/')
.get((req, res)=>{
  res.sendFile(frontend + 'index.html');
});

app.route('/gallery')
.get((req, res)=>{
  res.sendFile( path.resolve(frontend + 'gallery.html') );
});

/****** Listening on port ******/
app.listen(PORT, ()=>{
  console.log('Listening on ' + PORT);
});
