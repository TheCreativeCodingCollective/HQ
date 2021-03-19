/**** Dependencies ********/
const express = require('express');
const env = require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');

/******* Global Variables *********/
const app = express();
const PORT = process.env.PORT;
const frontend = __dirname + '/../frontend/'

/******** Middleware **********/
app.use(express.static('../frontend'));
app.use(bodyParser.urlencoded({extended:true}));


/******** Routing *******/
app.route('/')
.get((req, res)=>{
  res.sendFile(frontend + 'index.html');
});

app.route('/gallery')
.get((req, res)=>{
  res.sendFile( path.resolve(frontend + 'gallery.html') );
});

app.route('/forum')
.get((req, res)=>{
  res.sendFile( path.resolve(frontend + 'forum.html') )
})
.post((req, res)=>{
  name = req.body.Name;
  console.log(name);
  res.send('submited')
});;

app.route('/news')
.get((req, res)=>{
  res.sendFile( path.resolve(frontend + 'news.html') )
});
/****** Listening on port ******/
app.listen(PORT, ()=>{
  console.log('Listening on ' + PORT);
});
