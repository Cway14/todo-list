import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const editTodo = (todo) => {
    props.setCurrentTodo(todo);
    props.setShowModal(true);
  };

  const checkCategory = (todoItem) => {
    if (props.currentCategory.id === -1) return todoItem;
    return todoItem.category_id === props.currentCategory.id;
  };
  const todoList = props.todoList.filter(checkCategory);

  return (
    <ul className="mx-4 mt-32 mb-16">
      {todoList.map((todo) => (
        <TodoItem
          key={todo.todo_id}
          todo={todo}
          editTodo={editTodo}
          setTodoList={props.setTodoList}
          setCompletedTodos={props.setCompletedTodos}
          currentCategory={props.currentCategory}
        />
      ))}
    </ul>
  );
};

export default TodoList;
