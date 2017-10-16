declare var require;
declare var console;
const express = require("express");
const app = express();
const http = require("http");
const axios = require('axios');
const server = http.createServer(app);
const port = 8088;

app.get('/', async (req,res) => {
	let result = await axios.get("https://google.com");
	res.send(result.data);
});

server.listen(port);
console.log("Listening in port " + port);