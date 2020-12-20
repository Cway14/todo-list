import getCompletedTodos from "./getCompletedTodos";

const addTodoToCompletedTable = async (todo, updateCompletedTodos) => {
  try {
    const description = todo.description;
    const body = { description };
    const response = await fetch(`http://192.168.1.26:5000/completed`, {
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
  getCompletedTodos(updateCompletedTodos);
};
export default addTodoToCompletedTable;
