const http = require('http');
const server = http.createServer();

/**
 * req -> this represents the request
 * res -> this represents the response obj
 */
server.on('request', function (req, res) {
    /**
     * url -> differentiate different features
     * console.log(url, req.url)
     */

    if (req.url == '/profile') {
        res.end('data of profile');
    } else if (req.url == '/about') {
        res.end('data of about');
    } else {
        res.end('404 url not found');
    }
    console.log('Request received`');
    // res.end('thanks for sending the request')
})

// there is a server listening at point 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log('server is running at port', PORT);
});
// what is the use case of IP address
// : to identify a machine over network
// port is used to uniquely identify a server in a machine

// whenever the browser make a request it make 2 request

