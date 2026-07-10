# Nodejs Asynchronous Non-Blocking IO Example

This example demonstrates Node.js's asynchronous, non-blocking I/O model. It sets up a simple HTTP server with two routes: a fast-responding root route and a '/long-task' route that simulates a time-consuming I/O operation using `setTimeout`. By making concurrent requests, you can observe how Node.js continues to serve other requests without being blocked by the pending 'long-task', illustrating its efficiency for I/O-bound applications.

## Language

`javascript`

## How to Run

1. Save the code as `server.js`.
2. Open your terminal and navigate to the directory.
3. Run `node server.js`. Then, open your browser and visit `http://localhost:3000/` and `http://localhost:3000/long-task` concurrently to observe the non-blocking behavior in the terminal logs.

## Original Article

This example accompanies the Turkish article: [Lider Teknoloji Şirketleri Node.js'i Ölçeklenebilir Çözümler İçin Nasıl Kullanıyor?](https://fatihsoysal.com/blog/lider-teknoloji-sirketleri-node-jsi-olceklenebilir-cozumler-icin-nasil-kullaniyor/).

## License

MIT — see [LICENSE](LICENSE).
