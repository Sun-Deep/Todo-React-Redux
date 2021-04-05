import { useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTrash, FaClock } from "react-icons/fa";

import { DeleteTodo, GetTodos, ToggleDone } from "../../actions/TodoActions";
import { TodoType } from "../../actions/TodoActionTypes";
import { RootStore } from "../../Store";
import "./styles.css";

function TodoLists() {
  const dispatch = useDispatch();
  const todoState = useSelector((state: RootStore) => state.todos);

  useEffect(() => {
    dispatch(GetTodos);
  }, []);

  const { todos } = todoState;

  const handleDeleteTodo = (id: string) => {
    dispatch(DeleteTodo(id));
  };

  const handleToggleTodo = (id: string) => {
    dispatch(ToggleDone(id));
  };

  return (
    <div className="todo-list-card">
      {todos &&
        todos.map((todo: TodoType) => (
          <div key={todo._id} className="todo-items">
            <div>
              <p className={`${todo.done ? "cut" : ""}`}>{todo.title}</p>
              <small>{new Date(todo.createdAt).toLocaleDateString()}</small>
            </div>
            <div>
              <button
                className="todo-done"
                onClick={() => handleToggleTodo(todo._id)}
              >
                {!todo.done ? <FaClock /> : <FaCheck />}
              </button>
              <button
                className="todo-delete"
                onClick={() => handleDeleteTodo(todo._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoLists;
