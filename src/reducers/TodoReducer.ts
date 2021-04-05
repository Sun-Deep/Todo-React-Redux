import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  TodoDispatchTypes,
  TodoType,
  UPDATE_TODO,
} from "../actions/TodoActionTypes";

export interface DefaultTodoState {
  todos: TodoType[] | [];
}

const defaultState: DefaultTodoState = {
  todos: [],
};

export const todoReducer = (
  state: DefaultTodoState = defaultState,
  action: TodoDispatchTypes
): DefaultTodoState => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...(state.todos || []), action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: TodoType) => todo._id !== action.payload._id
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: TodoType) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};
