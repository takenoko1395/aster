import { Button } from '@mui/material';
import { io } from 'socket.io-client';

let socket: any;
const Socket = () => {
    const onConnect = () => {
        socket = io('ws://127.0.0.1:5050');

        socket.on('connect', (payload:any) => {
            console.log('websocket connect:',payload);
        })
        socket.on('disconnect', (event:any) => {
            console.log('websocket disconnect');
        })
    };

    const onDisconnect = () => {
        socket?.close();
    };

    return (
        <div>
            WebSocketのテストページ:
            <Button onClick={onConnect}>接続</Button>
            <Button onClick={onDisconnect}>切断</Button>
        </div>
    );
};

export default Socket;
