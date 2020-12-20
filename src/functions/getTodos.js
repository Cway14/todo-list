const getTodos = async (updateTodoList) => {
  try {
    const response = await fetch("http://192.168.1.26:5000/todos");
    const JSONData = await response.json();
    updateTodoList(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};
export default getTodos;
