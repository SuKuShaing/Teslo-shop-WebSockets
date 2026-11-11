import "./style.css";
import { connectToServer } from "./socket-clients.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div>
    <h1>WebSocket - Client</h1>

	<span id="server-status">offline</span>

</div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
connectToServer();
