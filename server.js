/*jshint esversion: 6 */
const express = require('express');
const path = require('path');

const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/color-run/game', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/assets/builds/color-run/index.html'));
});

app.get('/rhythm/game', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/assets/builds/Rhythm/index.html'));
});

app.get('/panda-protect/game', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/assets/builds/panda/index.html'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);