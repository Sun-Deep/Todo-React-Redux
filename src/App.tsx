import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoLists from "./components/TodoLists/TodoLists";
import generateTime from "./helpers/generateTime";

function App() {
  console.log("hello");
  const [clock, setClock] = useState<string>("");

  function handleClock() {
    setInterval(() => {
      setClock(() => generateTime());
    }, 60000);
  }

  useEffect(() => {
    setClock(() => generateTime());
    handleClock();
  }, []);

  return (
    <div className="container">
      <div className="left">
        <AddTodo />
        <TodoLists />
      </div>
      <div className="right">
        <div className="clock">
          <p>{clock}</p>
          <small>{new Date().toLocaleDateString()}</small>
        </div>
        <div className="quote">
          <p>
            You have to read scripts and audition and develop relationships. It
            takes a long time to develop a body of work but over the last 25
            years I guess I've done that many movies. In hindsight it may seem
            effortless, but there's a lot of work that goes into it.
          </p>
          <small>Harry Connick, Jr.</small>
        </div>
      </div>
    </div>
  );
}

export default App;
