const dotenv = require("dotenv");
dotenv.config();

export const addTodoToCompletedTable = async (todo, setCompletedTodos) => {
  try {
    const description = todo.description;
    const body = { description };
    const response = await fetch(`${process.env.ROUTE_URL}/completed`, {
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
  getCompletedTodos(setCompletedTodos);
};

export const deleteCompleted = async (id, setCompletedTodos) => {
  try {
    const response = await fetch(`${process.env.ROUTE_URL}/completed/${id}`, {
      method: "DELETE",
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
  getCompletedTodos(setCompletedTodos);
};

export const getCompletedTodos = async (setCompletedTodos) => {
  try {
    const response = await fetch(`${process.env.ROUTE_URL}/completed`);
    const JSONData = await response.json();
    setCompletedTodos(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};
