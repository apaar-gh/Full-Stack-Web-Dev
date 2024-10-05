import React, { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [inItem, setInItem] = useState("");

  function handleClick() {
    setItem((prevItem) => {
      return [...prevItem, inItem];
    });
    setInItem("");
    // console.log(item);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInItem(newValue);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItems) => {
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;