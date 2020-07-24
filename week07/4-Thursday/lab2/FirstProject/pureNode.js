// Example of setting up a server with just node

const http = require('http');
const server = http.createServer((req, res) => {
  // Creating homepage
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello, World!</h1>');
    res.end();
  }
  // Creating another page -> called routes
  else if (req.url === '/aboutus') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>About Us.</h1>');
    res.end();
  }
})

server.listen(5000);
console.log('Node is listening on port 5000');
