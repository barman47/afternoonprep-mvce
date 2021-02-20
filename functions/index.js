const functions = require('firebase-functions');
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json({ limit: '25mb', extended: true }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

// File upload middleware
app.use(fileUpload());

app.post('/', (req, res) => {
    // req.files is null. Should be populated with the file sent via request
    console.log(req.files);
});

exports.api = functions.https.onRequest(app);