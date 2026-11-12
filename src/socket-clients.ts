import { Manager, Socket } from "socket.io-client"

export const connectToServer = () => {

    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js')

    const socket = manager.socket('/');
    console.log({ socket });

    addListeners(socket);
}

const addListeners = (socket: Socket) => {
    const serverStatusLabel = document.querySelector<HTMLSpanElement>("#server-status")!;

    const clientsUl = document.querySelector<HTMLUListElement>("#clients-ul")!;

    // escuchar el evento 'connect' que envia el servidor cuando se conecta el cliente
    socket.on('connect', () => {
        serverStatusLabel.textContent = 'Online';
        // Estilos de pill verde de fondo suave y bordes verde intenso, letras blancas
        serverStatusLabel.style.color = 'white';
        serverStatusLabel.style.backgroundColor = 'rgba(0, 128, 0, 0.4)';
        serverStatusLabel.style.border = '2px solid darkgreen';
        serverStatusLabel.style.padding = '3px 8px';
        serverStatusLabel.style.borderRadius = '10px';
    });

    // escuchar el evento 'disconnect' que envia el servidor cuando se desconecta el servidor mismo
    socket.on('disconnect', () => {
        serverStatusLabel.textContent = 'Offline';
        // Estilos de pill rojo
        serverStatusLabel.style.color = 'white';
        serverStatusLabel.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
        serverStatusLabel.style.border = '2px solid darkred';
        serverStatusLabel.style.padding = '3px 8px';
        serverStatusLabel.style.borderRadius = '10px';
    });

    // escuchar el evento 'clients-updated' que envia el servidor con la lista de clientes conectados
    socket.on('clients-updated', (clients: string[]) => {
        let clientsHtml = '';
        clients.forEach(clientId => {
            clientsHtml += `
                <li>${clientId}</li>
            `;
        });
        clientsUl.innerHTML = clientsHtml;
    })
}