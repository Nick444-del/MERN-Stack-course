import express from "express";
import dotenv from "dotenv";

import playerRole from "./routers/player_role.router.js";
import playerBasic from "./routers/player_basic.router.js";
import playerRaid from "./routers/player_raid.router.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log("Server running on http://localhost:"+port);
})

app.use(playerRole);
app.use(playerBasic);
app.use(playerRaid);