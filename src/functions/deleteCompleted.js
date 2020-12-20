import getCompletedTodos from "./getCompletedTodos";

const deleteCompleted = async (id, updateCompletedTodos) => {
  try {
    console.log(id);
    const response = await fetch(`http://192.168.1.26:5000/completed/${id}`, {
      method: "DELETE",
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
  getCompletedTodos(updateCompletedTodos);
};

export default deleteCompleted;
