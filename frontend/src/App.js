import React, { useState, useEffect } from "react";
import "./css/tailwind.output.css";

// components
import Modal from "./components/modal";
import CompletedTodoList from "./components/CompletedTodoList";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import Sidebar from "./components/SideBar/sidebar";

// functions
import { getTodos } from "./functions/todoActions";
import { getCompletedTodos } from "./functions/completedTodoActions";
import { getCategories } from "./functions/categoriesActions";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showMenu, toggleMenu] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({ id: 1 });

  useEffect(() => {
    getTodos(setTodoList);
    getCompletedTodos(setCompletedTodos);
    getCategories(setCategories);
  }, []);

  // useEffect(() => {
  //   console.log(currentCategory);
  // }, [currentCategory]);

  return (
    <div>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <Modal todo={currentTodo} setModal={setShowModal} />
      </div>

      <div
        className={`${
          showMenu ? "w-full sm:w-1/3" : "w-0"
        } z-20 fixed bottom-0 left-0 transition-width duration-700 overflow-hidden`}
      >
        <Sidebar
          categories={categories}
          setCategories={setCategories}
          setTodoList={setTodoList}
          setCompletedTodos={setCompletedTodos}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          toggleMenu={toggleMenu}
        />
      </div>
      {showMenu && (
        <button
          className="w-screen h-screen bg-black opacity-50 z-10 fixed top-0 left-0"
          onClick={() => toggleMenu(!showMenu)}
        ></button>
      )}

      <div className="z-0">
        <div className="w-full">
          <TextInput
            setTodoList={setTodoList}
            toggleMenu={toggleMenu}
            showMenu={showMenu}
            currentCategory={currentCategory}
          />
          <TodoList
            setShowModal={setShowModal}
            setCurrentTodo={setCurrentTodo}
            todoList={todoList}
            setTodoList={setTodoList}
            setCompletedTodos={setCompletedTodos}
            currentCategory={currentCategory}
          />
          <CompletedTodoList
            completedTodos={completedTodoList}
            setCompletedTodos={setCompletedTodos}
            currentCategory={currentCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
