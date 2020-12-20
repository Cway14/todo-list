const sendEdit = async (todo) => {
  try {
    const description = todo.description;
    const id = todo.todo_id;
    const body = { description };
    const response = await fetch(`http://192.168.1.26:5000/todos/${id}`, {
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

export default sendEdit;
