import "./styles/App.scss";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/Form/Form";

function App() {
  const [todos, setTodos] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://630f2d283792563418893c3d.mockapi.io/todos"
    ).then((res) => res.json());
    setTodos(response);
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(todos);

  return (
    <div className="container">
      <header>TODO APP</header>
      <Form />
      {<TodoList todos={todos} />}
    </div>
  );
}

export default App;
