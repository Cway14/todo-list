import React, { useState } from "react";

import SVG from "./SVG";
import addTodo from "./../functions/addTodo";
import getTodos from "./../functions/getTodos";

const TextInput = (props) => {
  const [description, changeDescription] = useState("");
  return (
    <form
      onSubmit={(e) => {
        if (description) {
          addTodo(e, description, getTodos, props.updateTodoList);
          changeDescription("");
        }
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
        <SVG id={3} />
      </button>
    </form>
  );
};

export default TextInput;
