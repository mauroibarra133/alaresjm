import express  from "express";
import config from "./config";

const app = express()

//settings
let port;
port = config.port
app.set('port', port)

export default app