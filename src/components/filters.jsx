import React from "react";

export default function Filters({ onChangeUser, onChangeCompleted }) {
  return (
    <div className="filters">
      <div>
        <label htmlFor="">User: </label>
        <select onChange={onChangeUser}>
          <option value="null">none</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>
      </div>
      <div>
        <label htmlFor="">Is Completed: </label>
        <select onChange={onChangeCompleted}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
    </div>
  );
}
