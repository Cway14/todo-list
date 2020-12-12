import React, { useState, useEffect } from "react";
import "./css/tailwind.output.css";

// components
import Modal from "./modal";

// TODO: refactor, finish styling

function App() {
  const [description, changeDescription] = useState("");
  const [todolist, updateTodoList] = useState([]);
  const [completedTodos, updateCompletedTodos] = useState([]);
  const [showCompleted, toggleShowCompleted] = useState(false);
  const [currentTodo, updateCurrentTodo] = useState({});
  const [showModal, toggleShowModal] = useState(false);

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://192.168.1.15:5000/todos", {
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
    window.location = "/";
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://192.168.1.15:5000/todos");
      const JSONData = await response.json();
      updateTodoList(JSONData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTodo = (todo) => {
    toggleShowModal(!showModal);
    updateCurrentTodo(todo);
  };

  const sendEdit = async (todo) => {
    console.log("Hello");
    try {
      const description = todo.description;
      const id = todo.todo_id;
      const body = { description };
      const response = await fetch(`http://192.168.1.15:5000/todos/${id}`, {
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

  const completeTodo = (todo) => {
    addTodoToCompletedTable(todo);
    deleteTodo(todo.todo_id);
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.15:5000/todos/${id}`, {
        method: "DELETE",
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/";
  };

  const addTodoToCompletedTable = async (todo) => {
    try {
      const description = todo.description;
      const body = { description };
      const response = await fetch(`http://192.168.1.15:5000/completed`, {
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
    window.location = "/";
  };

  const getCompletedTodos = async () => {
    try {
      const response = await fetch("http://192.168.1.15:5000/completed");
      const JSONData = await response.json();
      updateCompletedTodos(JSONData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteCompleted = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.15:5000/completed/${id}`, {
        method: "DELETE",
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/";
  };

  useEffect(() => {
    getTodos();
    getCompletedTodos();
  }, []);

  return (
    <div>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <Modal
          todo={currentTodo}
          sendEdit={sendEdit}
          toggleModal={toggleShowModal}
        />
      </div>
      <form
        onSubmit={(e) => {
          addTodo(e);
        }}
        className="h-24 bg-green-500 rounded-b-lg w-screen items-center justify-between flex"
      >
        <input
          className="h-12 w-3/4 mx-12 bg-transparent text-white placeholder-white outline-none text-2xl"
          placeholder="Enter Something..."
          onChange={(e) => {
            changeDescription(e.target.value);
          }}
          value={description}
        ></input>
        <button type="submit" className="mx-6">
          <svg
            className="h-12 w-12 stroke-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </form>

      <ul className="m-4">
        {todolist.map((todo) => (
          <li
            className="m-2 py-2 rounded-lg bg-gray-200 flex justify-between items-center"
            key={todo.todo_id}
          >
            <span className="mx-2 text-xl sm:mx-12 sm:text-2xl">
              {todo.description}
            </span>
            <div className="flex-shrink-0">
              {/* EDIT button */}
              <button className="m-2" onClick={() => editTodo(todo)}>
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 stroke-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              {/* DONE button */}
              <button className="m-2" onClick={() => completeTodo(todo)}>
                <svg
                  className="h-6 w-6 md:h-8 md:w-8 stroke-current text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              {/* DELETE button */}
              <button
                className=" h-8 m-2 mr-8 stroke-current text-red-500"
                onClick={() => {
                  deleteTodo(todo.todo_id);
                }}
              >
                <svg
                  className="h-6 w-6 md:h-8 md:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="w-full py-4 fixed bottom-0 border-t flex justify-center bg-white">
          <button
            className="text-xl text-gray-700"
            onClick={() => {
              toggleShowCompleted(!showCompleted);
            }}
          >{`${showCompleted ? "Hide Completed" : "Show Completed"}`}</button>
        </div>
      </div>
      <div className={`${showCompleted ? "block h-auto" : "hidden h-0"}`}>
        <div>
          <h1 className="w-full text-center text-xl">Completed</h1>
        </div>
        <ul className="m-4 mb-20">
          {completedTodos.map((todo) => (
            <li
              className="m-2 py-2 rounded-lg bg-gray-100 flex justify-between items-center"
              key={todo.todo_id}
            >
              <span className="mx-2 text-xl md:mx-12 md:text-2xl">
                {todo.description}
              </span>
              <div className="flex-shrink-0">
                {/* DELETE button */}
                <button
                  className=" h-8 m-2 mr-8 stroke-current text-red-500"
                  onClick={() => {
                    deleteCompleted(todo.id);
                  }}
                >
                  <svg
                    className="h-6 w-6 md:h-8 md:w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
