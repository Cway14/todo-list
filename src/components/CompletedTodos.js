import React from "react";
import { Fragment, useState, useEffect } from "react";

import CompletedItem from "./CompletedItem";
import ShowCompletedButton from "./ShowCompletedButton";
import getCompletedTodos from "./../functions/getCompletedTodos";

const CompletedTodos = (props) => {
  const [showCompleted, toggleShowCompleted] = useState(false);
  const updateCompletedTodos = props.updateCompletedTodos;
  const completedTodos = props.completedTodos;

  useEffect(() => {
    getCompletedTodos(updateCompletedTodos);
  });

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
          {completedTodos.map((todo) => (
            <CompletedItem
              key={todo.id}
              todo={todo}
              updateCompletedTodos={updateCompletedTodos}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default CompletedTodos;
