import React from "react";

const BottomBar = (props) => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex bg-gray-200 p-2">
      <div className="w-full flex justify-start">
        <button
          onClick={() => props.toggleEditLists(!props.editLists)}
          className="text-left text-red-700 hover:text-red-900 p-2"
        >
          Edit Lists
        </button>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={() => props.toggleAddList(!props.addList)}
          className="text-right text-green-700 hover:text-green-900 p-2"
        >
          Add List
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
