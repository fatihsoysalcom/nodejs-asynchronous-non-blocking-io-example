# nodejs-asynchronous-non-blocking-io-example
This example demonstrates Node.js's asynchronous, non-blocking I/O model. It sets up a simple HTTP server with two routes: a fast-responding root route and a '/long-task' route that simulates a time-consuming I/O operation using `setTimeout`. By making concurrent requests, you can observe how Node.js continues to serve other requests without being 
