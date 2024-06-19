import http from "http"
import dotenv from "dotenv"
dotenv.config({path: `.env.${process.env.NODE_ENV}`})

import stringUtils from "./utils/strings.js"

const PORT = process.env.PORT ?? 9999 //Caso o PORT for undefined em .env, a porta escolhida será a 9999;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
    res.write("Hello there!")
    res.end()
})

server.listen(PORT, () => {
    console.log("Server is running in PORT " + PORT);
})