const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const startTime = new Date();
    console.log(`[${startTime.toLocaleTimeString()}] Request received for: ${url}`);

    if (url === '/') {
        // This route demonstrates a fast, non-blocking operation.
        // Node.js handles this immediately.
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from Node.js! This is a fast response.\n');
        console.log(`[${new Date().toLocaleTimeString()}] Responded to ${url} quickly.`);
    } else if (url === '/long-task') {
        // This route simulates a long-running, non-blocking I/O operation.
        // The `setTimeout` function is asynchronous; it does not block the Node.js event loop.
        // While this 'task' is pending, Node.js can continue to process other incoming requests.
        console.log(`[${startTime.toLocaleTimeString()}] Starting long-task simulation (3s delay)...`);
        setTimeout(() => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Long task completed! This took 3 seconds (simulated I/O).\n');
            console.log(`[${new Date().toLocaleTimeString()}] Long-task finished and responded.`);
        }, 3000); // Simulate 3 seconds of I/O wait
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
        console.log(`[${new Date().toLocaleTimeString()}] Responded to ${url} with 404.`);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Try visiting http://localhost:3000/ and http://localhost:3000/long-task concurrently.');
    console.log('Observe the server logs to see how Node.js handles requests without blocking the main thread.');
});
