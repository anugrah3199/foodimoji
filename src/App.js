import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🍕": "pizza",
  "🍔": "burger",
  "🍟": "fries",
  "🌭": "hot Dog",
  "🍞": "bread",
  "🥐": "croissat",
  "🥨": "pretzel",
  "🧀": "cheese",
  "🍜": "noodles",
  "🍚": "rice bowl",
  "🍪": "Cookie"
};
export default function App() {
  var [inputValue, setInputChange] = useState("");
  function inputChangeHandler(event) {
    inputValue = event.target.value;
    if (emojiDict[inputValue] != null) {
      setInputChange(emojiDict[inputValue]);
    } else {
      setInputChange("not found!");
    }
  }
  function emojiClickHandler(emoji) {}
  return (
    <div className="App">
      <h1>Welcome to Foodimoji </h1>
      <p>Type in your favorite food emoji</p>
      <input onChange={inputChangeHandler}></input>
      <p> {inputValue}</p>
      <div>
        {Object.keys(emojiDict).map((emoji) => (
          <span
            onClick={emojiClickHandler(emoji)}
            style={{ cursor: "pointer", padding: "1rem", margin: "1rem 0" }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
