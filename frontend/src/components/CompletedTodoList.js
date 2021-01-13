import React from "react";
import { Fragment, useState } from "react";

import CompletedItem from "./CompletedItem";
import ShowCompletedButton from "./ShowCompletedButton";

const CompletedTodos = (props) => {
  const [showCompleted, toggleShowCompleted] = useState(false);
  const setCompletedTodos = props.setCompletedTodos;
  const completedTodos = props.completedTodos;

  const checkCategory = (todoItem) => {
    if (props.currentCategory.id === -1) return todoItem;
    return todoItem.category_id === props.currentCategory.id;
  };
  const completedTodoList = completedTodos.filter(checkCategory);

  return (
    <Fragment>
      <ShowCompletedButton
        showCompleted={showCompleted}
        toggleShowCompleted={toggleShowCompleted}
      />
      <div className={`${showCompleted ? "block h-auto" : "hidden h-0"}`}>
        <div>
          <h1 className="w-full text-center text-xl">Completed</h1>
        </div>
        <ul className="m-4 mb-20">
          {completedTodoList.map((todo) => (
            <CompletedItem
              key={todo.id}
              todo={todo}
              setCompletedTodos={setCompletedTodos}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default CompletedTodos;
