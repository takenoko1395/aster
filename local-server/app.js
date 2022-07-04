const http = require('http');

// ポート番号
const PORT = 5050;

// リクエスト・レスポンスの対応内容を記述
const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.write('Hello!');
    response.end();
});

const io = require('socket.io')(server, {
    port: PORT,
    cors: {
        origins: ['http://localhost:3000', 'http://127.0.0.1:5050'],
        methods: ['GET', 'POST'],
    },
});

// Connectしたときに呼ばれる
io.on('connection', (socket) => {
    console.log('Websocket connected');
});

// リスナーを起動
server.listen(PORT, () => {
    console.log(`${new Date()} サーバ起動 http://localhost:${PORT}`);
});
