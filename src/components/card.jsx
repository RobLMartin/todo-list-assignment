import React from "react";
import { XCircle } from "lucide-react";

export default function Card({ todo }) {
  const handleChange = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: e.target.checked,
      }),
    });
  };

  const handleDelete = () => {
    // we can evoke the delete but jsonplaceholder wont let us mutate the data.
    fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          // we can remove the todo from the list, but we would need to pass the list to this component and update it. We could move this function to the parent component and pass it down as a prop to handle deletion from the state there.
        }
      })
      .catch((err) => {
        // we can show an error message
      });
  };

  return (
    <div className="card">
      {todo.title}
      <div className="card-controls">
        <input
          type="checkbox"
          onChange={handleChange}
          defaultChecked={todo.completed}
        />
        <button onClick={handleDelete}>
          <XCircle size={20} color="red" />
        </button>
      </div>
    </div>
  );
}
