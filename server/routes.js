const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware 
app.use(cors());
app.use(express.json())

//routes

//create todo
app.post('/todos', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todos (description) VALUES ($1)", [description]);
        res.json(newTodo);
    } catch (err) {
        console.errror(err.message);
    }
})
//get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todos ORDER BY todo_id DESC");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//edit a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { description } = req.body;
        const { id } = req.params;
        const todo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo Updated");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
        res.json('Todo Deleted');
    } catch (err) {
        console.error(err.message);
    }
})

// add to completed
app.post('/completed', async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO completed (description) VALUES ($1)", [description]);
        res.json(newTodo);
    } catch (err) {
        console.errror(err.message);
    }
})

// get all completed
app.get('/completed', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM completed ");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//delete a todo
app.delete('/completed/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("DELETE FROM completed WHERE id = $1", [id]);
        res.json('Todo Deleted');
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
});