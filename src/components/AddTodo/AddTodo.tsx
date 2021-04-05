import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { RegisterTodo } from "../../actions/TodoActions";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  const dispatch = useDispatch();

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(RegisterTodo(todoTitle, false));
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          className="add-todo"
          placeholder="What's your plan today ?"
          value={todoTitle}
          onChange={handleTitle}
        />
      </form>
    </div>
  );
};

export default AddTodo;
