import React, { useState } from "react";

import SVG from "./SVG";
import { addTodo } from "./../functions/todoActions";
import { editCategoryTitle } from "../functions/categoriesActions";

const TextInput = (props) => {
  const [description, changeDescription] = useState("");
  return (
    <div className="h-24 bg-green-500 rounded-b-lg w-full flex items-center shadow-xl fixed top-0">
      <button
        className="text-white mx-10"
        onClick={() => props.toggleMenu(!props.showMenu)}
      >
        <SVG id={4} />
      </button>
      <form
        onSubmit={(e) => {
          if (description) {
            addTodo(
              e,
              description,
              props.currentCategory.id,
              props.setTodoList
            );
            changeDescription("");
          } else {
            editCategoryTitle({ id: 1, description: "test" });
          }
        }}
        className="h-24 rounded-b-lg w-full items-center justify-between flex"
      >
        <input
          className="h-12 w-3/4 -ml-4 mr-12 bg-transparent text-white placeholder-white outline-none text-2xl"
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
    </div>
  );
};

export default TextInput;
