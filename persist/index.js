const todo_db = {};

function randomID(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}


const addTodo = function (todo) {
    id = randomID(8);
    todo._id = id;
    todo_db[id] = todo;
    return todo;
}

const getTodo = function (id) {
    return todo_db[id];
};

const getTodos = function () {
    return todo_db;
};

const deleteTodo = function (id) {
    deletedTodo = todo_db[id];
    delete todo_db[id];
    return deletedTodo;
};

const putTodo = function (todo, id) {
    todo_db[id] = todo;
    return todo_db[id];
};

const patchTodo = function (patchData, id) {
    Object.keys(patchData).forEach((property) => {
        todo_db[id][property] = patchData[property];
    })
    return todo_db[id];
};

module.exports = {
    addTodo: addTodo,
    getTodo: getTodo,
    getTodos: getTodos,
    deleteTodo: deleteTodo,
    putTodo: putTodo,
    patchTodo: patchTodo,
}