const http = require('http');

// create server
const server = http.createServer((req, res)=>{
  // handling incomming requests
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.end();
});

// listen for requests
server.listen(5000);

console.log('Node.js web server is running at port 5000....');