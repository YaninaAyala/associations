import { config } from "dotenv"; //ojo no me aparecía el paquete
config();

import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Server running on port:", PORT));
