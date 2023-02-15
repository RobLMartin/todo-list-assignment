import { useState } from "react";

export default function CreateTodoForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // review the network tab in your browser to see the request.
    fetch("http://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: inputValue,
        completed: false,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Todo created!");
          // Maybe we want add the new todo to the list of todos or refetch the list of todos.
        }
        setInputValue("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleChange}
        onBlur={handleSubmit}
      />
    </div>
  );
}
