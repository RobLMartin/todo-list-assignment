import React from "react";

export default function Card({ todo }) {
  const handleChange = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: e.target.checked,
      }),
    });
  };

  return (
    <div className="card">
      {todo.title}
      <input
        type="checkbox"
        onChange={handleChange}
        defaultChecked={todo.completed}
      />
    </div>
  );
}
