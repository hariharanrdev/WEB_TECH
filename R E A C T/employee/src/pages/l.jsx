import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = () => {
    setData(input);
    setInput(""); // clear input after submit
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
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

export default App;