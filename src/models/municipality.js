// var Px = require('px'),
//     fs = require('fs');

//     // a Link to needed api
// const apiUrl = "http://pxnet2.stat.fi/pxweb/api/v1/fi/StatFin/?query=*&filter="

// fs.readFile('apiUrl', 'utf8', function (err, data) {
//     px = new Px(data);
// });

// Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'http://pxnet2.stat.fi/pxweb/api/v1/fi/StatFin/?query=*&filter=', true)

// request.onload = function() {
//   // Begin accessing JSON data here
// }

// // Send request
// request.send()

const https = require("https");
const url = "https://pxnet2.stat.fi/PXWeb/api/v1/fi/Kuntien_avainluvut/";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body);
  });
});

