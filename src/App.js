import React, { useState, useEffect } from "react";
import "./css/tailwind.output.css";

// components
import Modal from "./modal";
import CompletedTodos from "./components/CompletedTodos";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";

// functions
import getTodos from "./functions/getTodos";

function App() {
  const [todolist, updateTodoList] = useState([]);
  const [completedTodos, updateCompletedTodos] = useState([]);
  const [currentTodo, updateCurrentTodo] = useState({});
  const [showModal, toggleShowModal] = useState(false);

  useEffect(() => {
    getTodos(updateTodoList);
  }, []);

  return (
    <div>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <Modal todo={currentTodo} toggleModal={toggleShowModal} />
      </div>
      <TextInput updateTodoList={updateTodoList} />
      <TodoList
        toggleShowModal={toggleShowModal}
        updateCurrentTodo={updateCurrentTodo}
        showModal={showModal}
        todolist={todolist}
        updateTodoList={updateTodoList}
        updateCompletedTodos={updateCompletedTodos}
      />
      <CompletedTodos
        completedTodos={completedTodos}
        updateCompletedTodos={updateCompletedTodos}
      />
    </div>
  );
}

export default App;
