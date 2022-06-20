// initiate express server
const express = require('express')
const app = express()

// put in command line flags
const flags = require("flags");
flags.defineNumber("port", 3000, "Port for the http server to listen to.");
flags.parse();

// put in env vars
const dotenv = require('dotenv');

//set up port number
const port = flags.get("port") || process.env.PORT || 4000;

//set up server paths and handlers
app.get("/todo", (req, res) => {
    res.send("<h1>GET TODO</h1>");
});

app.get("/todos", (req, res) => {
    res.send("<h1>GET TODOS</h1>");
});

app.post("/todo", (req, res) => {
    res.send("<h1>POST</h1>");
});

app.delete("/todo", (req, res) => {
    res.send("<h1>DELETE</h1>");
});

app.put("/todo", (req, res) => {
    res.send("<h1>PUT</h1>");
});

app.patch("/todo", (req, res) => {
    res.send("<h1>PATCH</h1>");
});

app.listen(3000, () => {
    console.log(`Server is running on port ${port} `);
});