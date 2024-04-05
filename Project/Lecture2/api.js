/**
 * npm init -y
 * npm install express
 * */

const express = require('express');
// server is created
const app = express();

app.use(function (req, res) {
    /**
     * everytime any request is send the callback function 
     * inside the app.use will be invoked
     * 
     * inside the callback function you get two object -> 
     *      first -> req -> represents the HTTP request
     *      second -> req -> represents the HTTP responce   
     */
    console.log('received the request');
})
// listening for all the http requests
app.listen(300, function () {
    console.log('Listening to port 3000');
});