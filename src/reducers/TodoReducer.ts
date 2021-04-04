import {
  FETCH_TODOS,
  TodoDispatchTypes,
  TodoType,
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
    default:
      return state;
  }
};
