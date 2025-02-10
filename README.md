# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js: the lack of proper error handling in an HTTP server.  The `bug.js` file shows a server without any error handling, making it vulnerable to crashes if an unexpected error occurs. The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## Bug

The `bug.js` file creates a simple HTTP server but lacks error handling. This means that if anything goes wrong (e.g., the port is already in use, a request processing error occurs), the server will likely crash without any informative messages.

## Solution

The `bugSolution.js` file shows the corrected server with proper error handling using the `error` event listener. This ensures that the server doesn't crash and logs informative messages when errors happen, allowing for debugging and better server stability.