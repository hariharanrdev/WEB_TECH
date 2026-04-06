import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") {
      alert("Please enter something");
      return;
    }
    setData(input);
    setInput("");
  };

  return (
    <div>
      <h2>Simple Form</h2>

      <input
        type="text"
        placeholder="Enter something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      <h3>Output: {data}</h3>
    </div>
  );
}

export default Form;