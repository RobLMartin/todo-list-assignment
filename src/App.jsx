import { useState, useEffect } from "react";
import "./App.css";
import Filters from "./components/filters";
import Card from "./components/card";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState();
  const [completed, setCompleted] = useState(true);

  useEffect(() => {
    if (!userId) return;

    fetch(`${BASE_URL}/todos?userId=${userId}&completed=${completed}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [userId, completed]);

  const handleChangeUser = (e) => {
    setUserId(e.target.value);
  };
  const handleChangeCompleted = (e) => {
    setCompleted(e.target.value);
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <Filters
        onChangeUser={handleChangeUser}
        onChangeCompleted={handleChangeCompleted}
      />
      <div className="list">
        {todos.map((todo) => {
          return <Card key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
