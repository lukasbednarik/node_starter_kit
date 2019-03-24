const https = require('https');

const url = 'https://jsonplaceholder.typicode.com';

// Keep the order of requests intact
https.get({host: 'jsonplaceholder.typicode.com', path: '/posts/1'}, function(response) {
    console.log(response.statusCode);
    https.get(url + '/posts/1/comments', function(response) {
        console.log(response.statusCode);
        https.get(url + '/posts?userId=1', function(response) {
            console.log(response.statusCode);
            https.get(url + '/users?id=1', function(response) {
                // Continuously update stream with data
                let body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    // Data reception is done, do whatever with it!
                    let parsed = JSON.parse(body);
                    console.log(parsed[0].name);
                });
            });
        });
    });
});