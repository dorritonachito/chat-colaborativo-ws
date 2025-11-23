const WebSocket = require('ws');

// Creamos el servidor WebSocket en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

console.log('Servidor WebSocket iniciado en ws://localhost:8080');

// Función para enviar mensajes a TODOS los clientes conectados
function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

wss.on('connection', (ws) => {
    // 1. Asignar nombre de usuario temporal
    const userId = Math.floor(Math.random() * 10000);
    const username = `Usuario_${userId}`;
    ws.username = username;

    console.log(`Nuevo cliente conectado: ${username}`);

    // 2. Notificar entrada
    broadcast({
        type: 'sistema',
        content: `🟢 ${username} se ha unido al chat.`
    });

    // 3. Recibir y reenviar mensajes
    ws.on('message', (message) => {
        try {
            const textMsg = message.toString();
            broadcast({
                type: 'mensaje',
                user: username,
                content: textMsg
            });
        } catch (e) {
            console.error('Error procesando mensaje', e);
        }
    });

    // 4. Notificar salida
    ws.on('close', () => {
        console.log(`Cliente desconectado: ${username}`);
        broadcast({
            type: 'sistema',
            content: `🔴 ${username} ha abandonado el chat.`
        });
    });
});