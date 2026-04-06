import React, {useState} from 'react';

function New() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState("");

  const handlesubmit =() => {
    setdata(input);
    setinput("");
  };


  return (
    <div style={{textAlign:"center", marginTop: "50px"}}>
      <h2> Simple Form</h2>
      <input 
      type="text"
      placeholder="Enter Something"
      value={input}
      onChange={(e) => setinput(e.target.value)} />

      <br /><br />
      <button onClick={handlesubmit}>Submit
      <h3>Output: {data}</h3>
      </button>
    </div>
  )
}

export default New;