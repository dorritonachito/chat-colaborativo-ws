const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');

// Creamos un servidor HTTP básico para que Render sepa que estamos vivos
const server = http.createServer((req, res) => {
    // Si entran a la web, les damos el archivo index.html
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error cargando index.html');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

// Iniciamos el servidor en el puerto que diga la nube (o 8080 en casa)
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

// Conectamos el WebSocket a ese servidor HTTP
const wss = new WebSocket.Server({ server });

function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

wss.on('connection', (ws) => {
    const userId = Math.floor(Math.random() * 10000);
    const username = `Usuario_${userId}`;
    ws.username = username;

    console.log(`Nuevo cliente: ${username}`);

    broadcast({ type: 'sistema', content: `🟢 ${username} entró al chat.` });

    ws.on('message', (message) => {
        try {
            broadcast({ type: 'mensaje', user: username, content: message.toString() });
        } catch (e) { console.error(e); }
    });

    ws.on('close', () => {
        broadcast({ type: 'sistema', content: `🔴 ${username} salió del chat.` });
    });
});
