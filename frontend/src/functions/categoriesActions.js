import dotenv from "dotenv";
import { deleteCompleted, getCompletedTodos } from "./completedTodoActions";
import { deleteTodo, getTodos } from "./todoActions";
dotenv.config();

export const getCategories = async (setCategory) => {
  try {
    //get Categories
    const URL = `${process.env.REACT_APP_API_URL}/categories`;
    const response = await fetch(URL);
    let JSONData = await response.json();
    JSONData = [{ id: -1, description: "All" }, ...JSONData];
    //store categories
    setCategory(JSONData);
  } catch (err) {
    console.error(err.message);
  }
};

export const addCategory = async (description, setCategories) => {
  try {
    const body = { description };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(response);
  } catch (err) {
    console.error(err.mesage);
  }
  getCategories(setCategories);
};

export const editCategoryTitle = async (category, setCategories) => {
  try {
    const description = category.description;
    const id = category.id;
    const body = { description };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    console.log(response);
    getCategories(setCategories);
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteCategory = async (
  id,
  setCategories,
  setTodoList,
  setCompletedTodos
) => {
  try {
    //Delete Todos
    const checkCategory = (todoItem) => {
      return todoItem.category_id === id;
    };

    const todos = await getTodos(setTodoList);
    if (todos) {
      const todoList = todos.filter(checkCategory);
      console.log(todoList);
      todoList.forEach((todoItem) => {
        deleteTodo(todoItem.todo_id, setTodoList);
      });
    }

    //Delete Completed
    const completedTodos = await getCompletedTodos(setCompletedTodos);
    if (completedTodos) {
      const completedList = completedTodos.filter(checkCategory);
      completedList.forEach((todoItem) => {
        deleteCompleted(todoItem.id, setCompletedTodos);
      });
    }

    //Delete Category
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/categories/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
  } catch (err) {
    console.error(err.message);
  }
  getCategories(setCategories);
};
