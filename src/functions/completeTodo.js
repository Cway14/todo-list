import addTodoToCompletedTable from "./addTodotoCompletedTable";
import deleteTodo from "./deleteTodo";

const completeTodo = (todo, updateTodoList, updateCompletedTodos) => {
  addTodoToCompletedTable(todo, updateCompletedTodos);
  deleteTodo(todo.todo_id, updateTodoList);
};

export default completeTodo;
