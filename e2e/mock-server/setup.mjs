import { server } from "./server.js";

server.listen({ onUnhandledRequest: "bypass" });
