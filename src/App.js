import React, { useState, useEffect } from "react";
import "./css/tailwind.output.css";

// components
import Modal from "./components/modal";
import CompletedTodos from "./components/CompletedTodos";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";

// functions
import { getTodos } from "./functions/todoActions";
import { getCompletedTodos } from "./functions/completedTodoActions";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getTodos(setTodoList);
    getCompletedTodos(setCompletedTodos);
  }, []);

  return (
    <div>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <Modal todo={currentTodo} setModal={setShowModal} />
      </div>
      <TextInput setTodoList={setTodoList} />
      <TodoList
        setShowModal={setShowModal}
        setCurrentTodo={setCurrentTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        setCompletedTodos={setCompletedTodos}
      />
      <CompletedTodos
        completedTodos={completedTodoList}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
}

export default App;
