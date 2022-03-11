import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const itemChanged = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const addItem = () => {
    setTodoList((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          id="newItem"
          name="newItem"
          onChange={itemChanged}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
