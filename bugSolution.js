const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('error', (err) => {
  console.error('Server error:', err);
  // Additional error handling logic can be added here, e.g., retrying the connection
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});