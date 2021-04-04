import axios from "axios";

import { Dispatch } from "redux";

import { API_URL } from "../config";
import { FETCH_TODOS, TodoDispatchTypes } from "./TodoActionTypes";

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
