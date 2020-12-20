const addTodo = async (e, description, getTodos, updateTodoList) => {
  e.preventDefault();
  try {
    const body = { description };
    const response = await fetch("http://192.168.1.26:5000/todos", {
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
  getTodos(updateTodoList);
};

export default addTodo;
