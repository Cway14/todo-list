import React from "react";

const ShowCompletedButton = (props) => {
  return (
    <div className="w-full py-4 fixed bottom-0 border-t flex justify-center bg-white">
      <button
        className="text-xl text-gray-700"
        onClick={() => {
          props.toggleShowCompleted(!props.showCompleted);
        }}
      >{`${props.showCompleted ? "Hide Completed" : "Show Completed"}`}</button>
    </div>
  );
};

export default ShowCompletedButton;
