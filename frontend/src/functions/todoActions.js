import { addTodoToCompletedTable } from "./completedTodoActions";

export const addTodo = async (e, description, setTodoList) => {
  e.preventDefault();
  try {
    const body = { description };
    const response = await fetch("http://localhost/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
  } catch (err) {
    console.error(err.mesage);
  }
  getTodos(setTodoList);
};

export const sendEdit = async (todo) => {
  try {
    const description = todo.description;
    const id = todo.todo_id;
    const body = { description };
    const response = await fetch(`http://localhost/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
};

export const completeTodo = (todo, setTodoList, setCompletedTodos) => {
  addTodoToCompletedTable(todo, setCompletedTodos);
  deleteTodo(todo.todo_id, setTodoList);
};

export const deleteTodo = async (id, setTodoList) => {
  try {
    const response = await fetch(`http://localhost/todos/${id}`, {
      method: "DELETE",
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
  getTodos(setTodoList);
};

export const getTodos = async (setTodoList) => {
  console.log("Called");
  try {
    //get TODOS
    const response = await fetch("http://localhost/todos");
    const JSONData = await response.json();
    //store TODOS
    setTodoList(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};
