import React from "react";

export default function Card({ todo }) {
  /**
   * TODO:
   * 1. Add a checkbox to the card
   * 2. When the checkbox is checked, make a data call to JsonPlaceholder to patch the todo with todo.id and completed: e.target.checked"
   */

  return <div className="card">{todo.title}</div>;
}
