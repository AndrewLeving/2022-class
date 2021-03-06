// initiate express server
const express = require('express')
const app = express()

app.use(express.json());

//pull in db
const persist = require("./persist");

// put in command line flags
const flags = require("flags");
flags.defineNumber("port", 3000, "Port for the http server to listen to.");
flags.parse();

// put in env vars
const dotenv = require('dotenv');

//set up port number
const port = flags.get("port") || process.env.PORT || 4000;

//set up server paths and handlers
app.get("/todo/:id", (req, res) => {
    const id = req.params.id;
    const todo = persist.getTodo(id);
    res.json(todo);
});

app.get("/todos", (req, res) => {
    const todos = persist.getTodos();
    res.json(todos);
});

app.post("/todo", (req, res) => {
    const todo = persist.addTodo(req.body);
    res.json(todo);
});

app.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    const todo = persist.deleteTodo(id);
    res.json(todo);
});

app.put("/todo/:id", (req, res) => {
    const id = req.params.id;
    const todo = persist.putTodo(req.body, id);
    res.json(todo);
});

app.patch("/todo/:id", (req, res) => {
    const id = req.params.id;
    const todo = persist.patchTodo(req.body, id);
    res.json(todo);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});