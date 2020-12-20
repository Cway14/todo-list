import React from "react";
import deleteCompleted from "../functions/deleteCompleted";

const CompletedItem = (props) => {
  const todo = props.todo;
  return (
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
            deleteCompleted(todo.id, props.updateCompletedTodos);
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
  );
};

export default CompletedItem;
