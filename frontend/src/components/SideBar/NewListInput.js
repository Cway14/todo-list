import React from "react";
import { addCategory } from "../../functions/categoriesActions";

const NewListInput = (props) => {
  return (
    <li className="px-2 py-3 m-1 rounded-md font-semibold text-lg whitespace-nowrap">
      <form
        onSubmit={() => {
          addCategory(props.addListDescription, props.setCategories);
          props.toggleAddList(!props.addList);
        }}
      >
        <input
          placeholder="Add list title..."
          className="p-2"
          onChange={(e) => props.setAddListDescription(e.target.value)}
        ></input>
      </form>
    </li>
  );
};

export default NewListInput;
