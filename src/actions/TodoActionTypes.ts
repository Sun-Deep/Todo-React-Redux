export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const DELETE_TODO = "DELETE_TODO";

export interface TodoType {
  _id: string;
  title: string;
  done: boolean;
  createdAt: string;
}

export interface AddTodo {
  type: typeof ADD_TODO;
  payload: TodoType;
}

export interface FetchTodos {
  type: typeof FETCH_TODOS;
  payload: TodoType[];
}

export type TodoDispatchTypes = AddTodo | FetchTodos;
