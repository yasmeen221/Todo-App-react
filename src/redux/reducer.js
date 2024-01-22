import { combineReducers } from "redux";

export function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.todo];
    case "EDIT_TODO":
      return todos.map((todo) =>
        todo.id == action.todo.id ? action.todo : todo
      );
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id != action.id);
    default:
      return todos;
  }
}

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
