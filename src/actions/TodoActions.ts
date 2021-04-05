import axios from "axios";

import { Dispatch } from "redux";

import { API_URL } from "../config";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  TodoDispatchTypes,
  UPDATE_TODO,
} from "./TodoActionTypes";

export const GetTodos = async (dispatch: Dispatch<TodoDispatchTypes>) => {
  try {
    const res = await axios.get(`${API_URL}/todos/`);
    dispatch({
      type: FETCH_TODOS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("Fetching todos failed");
  }
};

export const RegisterTodo = (title: string, done: boolean) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    const res = await axios.post(`${API_URL}/todos/`, {
      title: title,
      done: done,
    });

    dispatch({
      type: ADD_TODO,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("Adding todos failed");
  }
};

export const DeleteTodo = (id: string) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    const res = await axios.delete(`${API_URL}/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("Deleting todos failed");
  }
};

export const ToggleDone = (id: string) => async (
  dispatch: Dispatch<TodoDispatchTypes>
) => {
  try {
    const res = await axios.put(`${API_URL}/todos/${id}`);
    dispatch({
      type: UPDATE_TODO,
      payload: res.data.data,
    });
  } catch (err) {
    console.log("Toggling todos failed");
  }
};
