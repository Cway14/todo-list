import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const editTodo = (todo) => {
    props.setCurrentTodo(todo);
    props.setShowModal(true);
  };

  return (
    <ul className="m-4">
      {props.todoList.map((todo) => (
        <TodoItem
          key={todo.todo_id}
          todo={todo}
          editTodo={editTodo}
          setTodoList={props.setTodoList}
          setCompletedTodos={props.setCompletedTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
