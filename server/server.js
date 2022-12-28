// Importing required modules
const cors = require('cors');
const express = require('express');

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', require('./routes/api'));


// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);



// const method = 'GET'
// const url = 'http://ws.audioscrobbler.com/2.0'
// const headers = {
//     'method': 'artist.search',
//     'api-key': 'cf5d9c7e3239b8c79869f788fccfb78b',
//     'artist': 'cher'
// }
//
// exports.submit = async function(req, res) {
//     const body = JSON.stringify({foo: 'bar'}) // your json data here
//     const json = await fetch(url, {body, method, headers}).then(res=> res.json())
//     console.log(json) // use it somehow
//     res.setHeader('Content-Type', 'application/json')
//     res.end(json)
// }


module.exports = app;
