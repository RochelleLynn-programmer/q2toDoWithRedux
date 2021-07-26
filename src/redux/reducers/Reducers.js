import { TOGGLE_TODO, ADD_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from "../actions/Actions";
import todoslist from "../../todos.json";
const defaultState = todoslist;

const reducers = (state = defaultState, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case TOGGLE_TODO:
      newTodos = [...state];
      newTodos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      return newTodos;
    case CLEAR_COMPLETED_TODOS:
      newTodos = [...state];
      const filtered = newTodos.filter((todo) => todo.completed !== true);
      return filtered;
    default:
      return state;
  }
};
export default reducers;
