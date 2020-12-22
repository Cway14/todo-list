export const addTodoToCompletedTable = async (todo, setCompletedTodos) => {
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
  getCompletedTodos(setCompletedTodos);
};

export const deleteCompleted = async (id) => {
  try {
    console.log(id);
    const response = await fetch(`http://192.168.1.26:5000/completed/${id}`, {
      method: "DELETE",
    });
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
};

export const getCompletedTodos = async (setCompletedTodos) => {
  try {
    const response = await fetch("http://192.168.1.26:5000/completed");
    const JSONData = await response.json();
    setCompletedTodos(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};
