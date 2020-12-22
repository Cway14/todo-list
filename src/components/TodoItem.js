import React from "react";
import SVG from "./SVG";

import { completeTodo, deleteTodo } from "../functions/todoActions";

const TodoItem = (props) => {
  const todo = props.todo;
  return (
    <li
      className="m-2 py-2 rounded-lg bg-gray-200 flex justify-between items-center"
      key={todo.todo_id}
    >
      <span className="mx-2 text-xl sm:mx-12 sm:text-2xl">
        {todo.description}
      </span>
      <div className="flex-shrink-0">
        {/* EDIT button */}
        <button className="m-2" onClick={() => props.editTodo(todo)}>
          <SVG id={0} />
        </button>
        {/* DONE button */}
        <button
          className="m-2"
          onClick={() => {
            completeTodo(todo, props.setTodoList, props.setCompletedTodos);
          }}
        >
          <SVG id={1} />
        </button>
        {/* DELETE button */}
        <button
          className="m-2 mr-8"
          onClick={() => deleteTodo(todo.todo_id, props.setTodoList)}
        >
          <SVG id={2} />
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
