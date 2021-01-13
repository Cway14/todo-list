const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// web page serving
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

//create todo
app.post("/todos", async (req, res) => {
  try {
    const { description, category_id } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description, category_id) VALUES ($1, $2)",
      [description, category_id]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});
//get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todos ORDER BY todo_id DESC"
    );
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  console.log("Getting Todos");
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//edit a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const todo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("Todo Updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id]);
    res.json("Todo Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

// add to completed
app.post("/completed", async (req, res) => {
  try {
    const { description, category_id } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO completed (description, category_id) VALUES ($1, $2)",
      [description, category_id]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

// get all completed
app.get("/completed", async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM completed ORDER BY id DESC "
    );
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete("/completed/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM completed WHERE id = $1", [id]);
    res.json("Todo Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/categories", async (req, res) => {
  try {
    const allCategories = await pool.query(
      "SELECT * FROM categories ORDER BY id ASC"
    );
    res.json(allCategories.rows);
  } catch (err) {
    console.error(err);
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO categories (description) VALUES ($1)",
      [description]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err);
  }
});

//edit a category
app.put("/categories/:id", async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    await pool.query("UPDATE categories SET description = $1 WHERE id = $2", [
      description,
      id,
    ]);
    res.json("Category Updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo
app.delete("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await pool.query("DELETE FROM categories WHERE id = $1", [
      id,
    ]);
    res.json("Category Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
