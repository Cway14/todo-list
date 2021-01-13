import React, { useState } from "react";
import {
  deleteCategory,
  editCategoryTitle,
} from "../../functions/categoriesActions";
import SVG from "../SVG";
import MenuTitle from "./MenuTitle";
import NewListInput from "./NewListInput";
import BottomBar from "./BottomBar";

const Sidebar = (props) => {
  const categories = props.categories;
  const [editLists, toggleEditLists] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [addList, toggleAddList] = useState(false);
  const [addListDescription, setAddListDescription] = useState("");

  return (
    <div className="relative h-screen bg-gray-100 w-full z-0">
      <div>
        <MenuTitle toggleMenu={props.toggleMenu}/>
        <ul className="my-2">
          {categories.map((category) => {
            return (
              <li
                className={`${
                  category.id === props.currentCategory.id
                    ? "bg-gray-300"
                    : "hover:bg-gray-200"
                } px-2 py-3 m-1 rounded-md font-semibold text-lg whitespace-nowrap`}
                onClick={() => {
                  if (!editLists) {
                    props.setCurrentCategory(category);
                    props.toggleMenu(false);
                  }
                }}
                key={category.id}
              >
                <h3 className={`${editLists ? "hidden" : "block"}`}>
                  {category.description}
                </h3>
                <form
                  className={`${
                    editLists ? "block" : "hidden"
                  } flex items-center justify-between`}
                  onSubmit={(e) => {
                    editCategoryTitle(
                      {
                        id: category.id,
                        description: listTitle,
                      },
                      props.setCategories
                    );
                    setAddListDescription("");
                    toggleEditLists(!editLists);
                    e.preventDefault();
                  }}
                >
                  <input
                    className="outline-none rounded-sm p-1 -my-2"
                    placeholder={category.description}
                    onChange={(e) => setListTitle(e.target.value)}
                  ></input>
                  <button
                    type="button"
                    onClick={() => {
                      deleteCategory(
                        category.id,
                        props.setCategories,
                        props.setTodoList,
                        props.setCompletedTodos
                      );
                    }}
                  >
                    <SVG id="2" />
                  </button>
                </form>
              </li>
            );
          })}
          {addList && (
            <NewListInput
              setCategories={props.setCategories}
              addList={addList}
              toggleAddList={toggleAddList}
              setAddListDescription={setAddListDescription}
              addListDescription={addListDescription}
            />
          )}
        </ul>
        <BottomBar
          addList={addList}
          editLists={editLists}
          toggleEditLists={toggleEditLists}
          toggleAddList={toggleAddList}
        />
      </div>
    </div>
  );
};

export default Sidebar;
