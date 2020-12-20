import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const editTodo = (todo) => {
    props.pdateCurrentTodo(todo);
    props.toggleShowModal(!props.showModal);
  };

  return (
    <ul className="m-4">
      {props.todolist.map((todo) => (
        <TodoItem
          todo={todo}
          editTodo={editTodo}
          updateTodoList={props.updateTodoList}
          updateCompletedTodos={props.updateCompletedTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
