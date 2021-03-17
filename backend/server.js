const express = require('express');
const env = require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const frontend = '../frontend/'

app.use(express.static('../frontend'))

app.get('/', (req, res)=>{
  res.sendFile(frontend + 'index.html');
});

app.get('/gallery', (req, res)=>{
  //this path doesn't work not sure why gonna solve
  res.sendFile(frontend + 'gallery.html');
});

app.listen(PORT, ()=>{
  console.log('Listening on ' + PORT);
});
