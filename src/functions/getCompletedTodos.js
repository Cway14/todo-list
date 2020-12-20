const getCompletedTodos = async (updateCompletedTodos) => {
  try {
    const response = await fetch("http://192.168.1.26:5000/completed");
    const JSONData = await response.json();
    updateCompletedTodos(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};
export default getCompletedTodos;
