import "./style.css";
import { connectToServer } from "./socket-clients.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
    <h2>WebSocket - Client</h2>

    <input id="jwt-Token" placeholder="JWT Token" />
    <button id="btn-connect">Connect</button>

    <br />

	<span id="server-status">offline</span>

    <ul id="clients-ul">
    </ul>

    <form id="message-form">
        <input placeholder="message" id="message-input" />
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>

</div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
// connectToServer();

const inputJwtToken = document.querySelector<HTMLInputElement>("#jwt-Token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener('click', () => {
    const jwtToken = inputJwtToken.value.trim();
    if (jwtToken.length <= 0) {
        alert('Please enter a JWT token');
        return;
    }

    // localStorage.setItem('jwt-token', jwtToken);
    connectToServer( jwtToken );
});