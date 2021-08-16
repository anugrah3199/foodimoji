import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "Fries",
  "🌭": "Hot Dog",
  "🍞": "Bread",
  "🥐": "Croissat",
  "🥨": "Pretzel",
  "🧀": "Cheese",
  "🍜": "Noodles",
  "🍚": "Rice bowl",
  "🍪": "Cookie"
};
export default function App() {
  var [inputValue, setInputChange] = useState("");
  function inputChangeHandler(event) {
    inputValue = event.target.value;
    if (emojiDict[inputValue] != null) {
      setInputChange(emojiDict[inputValue]);
    } else {
      setInputChange("We don't have this in our menu");
    }
  }

  function emojiClickHandler(emoji) {
    setInputChange(emojiDict[emoji]);
  }
  return (
    <div className="App">
      <h1>Welcome to Foodimoji </h1>
      <p>Type in your favorite food emoji</p>
      <input
        style={{ padding: "1rem", maxWidth: "300px", fontSize: "2rem" }}
        onChange={inputChangeHandler}
      ></input>
      <p style={{ fontSize: "2rem" }}> {inputValue}</p>
      <h3>Food emoji we know</h3>
      <div>
        {Object.keys(emojiDict).map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              padding: "1rem",
              margin: "1rem 0"
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
