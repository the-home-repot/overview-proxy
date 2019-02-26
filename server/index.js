const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../public'));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.get('/products/:ID', (req, res) => {
  let id = req.params.ID;
  axios.get(`http://ec2-3-93-54-61.compute-1.amazonaws.com/products/${id}`)
  axios.get(`http://ec2-3-93-54-61.compute-1.amazonaws.com/products/${id}`)
    .then(({data}) => {
      res.send(JSON.stringify(data));
    })
})
app.get('/productinfo/:ID', (req, res) => {
  console.log('new hit')
  let id = req.params.ID;
  console.log(id);
  axios.get(`http://ec2-13-59-174-32.us-east-2.compute.amazonaws.com:3030/productinfo/${id}`)
  // axios.get(`http://localhost:3030/productinfo/${id}`)
    .then(({data}) => {
      res.send(data);
    })
})
app.get('/getFiveRandom', (req, res) => {
  let id = req.params.ID;
  axios.get(`http://ec2-3-80-146-248.compute-1.amazonaws.com/getFiveRandom`)
    .then(({data}) => {
      res.send(JSON.stringify(data));
    })
})
  


app.listen(port, () => console.log('Now listening on port: ' + port));