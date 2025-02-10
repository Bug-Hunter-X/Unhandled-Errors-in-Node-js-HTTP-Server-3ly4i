const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Unexpected error handling
// In this case, error handling is missing which can lead to unexpected behaviour or crash.