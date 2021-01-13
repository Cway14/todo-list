import React, { useState } from "react";

import { sendEdit } from "./../functions/todoActions";

const Modal = (props) => {
  const todo = props.todo;
  const [description, changeDescription] = useState("");

  const editTodo = () => {
    todo.description = description;
    changeDescription("");
    sendEdit(todo);
    props.setModal();
  };

  const closeModal = () => {
    props.setModal();
  };

  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center">
      <div className="z-10 w-screen h-screen bg-black opacity-50"></div>
      <div className="z-20 fixed bg-white rounded-lg">
        <div className="py-4 px-20">
          <h1 className="text-3xl w-full text-center">Edit Todo</h1>
          <form onSubmit={() => editTodo()}>
            <input
              className="w-full p-2 pt-6 h-12 border-b text-xl outline-none"
              placeholder={todo.description}
              onChange={(e) => changeDescription(e.target.value)}
              value={description}
            ></input>
          </form>
          <div className="pt-4 bottom-0 flex justify-between">
            <button
              className="p-2 w-24 m-2 border border-yellow-500 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-white"
              onClick={() => editTodo()}
            >
              Edit
            </button>
            <button
              className="p-2 w-24 m-2 border border-red-700 rounded-full text-red-700 hover:bg-red-700 hover:text-white"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
