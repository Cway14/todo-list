import getTodos from "./getTodos";

const deleteTodo = async (id, updateTodoList) => {
  try {
    const response = await fetch(`http://192.168.1.26:5000/todos/${id}`, {
      method: "DELETE",
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
  getTodos(updateTodoList);
};

export default deleteTodo;
