import { addTodoToCompletedTable } from "./completedTodoActions";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.REACT_APP_API_URL);

export const addTodo = async (e, description, setTodoList) => {
  e.preventDefault();
  try {
    const body = { description };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
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
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
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
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
  getTodos(setTodoList);
};

export const getTodos = async (setTodoList) => {
  try {
    //get TODOS
    const URL = `${process.env.REACT_APP_API_URL}/todos`;
    const response = await fetch(URL);
    const JSONData = await response.json();
    //store TODOS
    setTodoList(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};
