/*
import React, { useState } from 'react'

const App = () => {
  let [formdata, setFormdata] = useState({
    num1:"",
    num2:"",
    num3:"",
    num4:"",
    num5:"",
  });
  
  let handleChange = e=> {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = e => {
    e.preventDefault();

    let{num1, num2, num3, num4, num5} = formdata;

    let sum =
      Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
    let result = {...formdata,sum };
    console.log(result);
  };

  return (
    <>
    <form>
      <p>Number 1*:
        <input type="text"
        name="num1" 
        required
        value={formdata.num1}
        onChange={handleChange}
        />
      </p>
      <p>Number 2*:
        <input type="text"
        name="num2" 
        required
        value={formdata.num2}
        onChange={handleChange}
        />
      </p>
      <p>Number 3*:
        <input type="text"
        name="num3" 
        required
        value={formdata.num3}
        onChange={handleChange}
        />
      </p>
      <p>Number 4:
        <input type="text"
        name="num4" 
        required
        value={formdata.num4}
        onChange={handleChange}
        />
      </p>
      <p>Number 5:
        <input type="text"
        name="num5" 
        required
        value={formdata.num5}
        onChange={handleChange}
        />
      </p>
    </form>
    
    </>

  );
};

export default App;
*/

import React,{Component} from 'react'
class  APP extends Component{
  constructor(){
    super();
    this.state = { counter: 0
    }
  }
  render(){
    return(<>
    <h2>Counter 1: {this.state.counter1}</h2>
    <button onClick={()=> this.setState({counter1: this.state.counter1+1})}>Update</button>
    <button onClick={()=> this.setState({counter1: 0})}>Reset</button>
    <button onClick={()=> this.setState({counter1: this.state.counter1-1})}>Decrease</button>

    <h2>Counter 2: {this.state.counter2}</h2>
    <button onClick={()=> this.setState({counter2: this.state.counter2+15})}>+15</button>
    <button onClick={()=> this.setState({counter2: 0})}>Reset</button>
    <button onClick={()=> this.setState({counter2: this.state.counter2-15})}>-15</button>
    
    <h2>Counter 3: {this.state.counter3}</h2>
    <button onClick={()=> this.setState({counter3: this.state.counter3-10})}>-10</button>
    <button onClick={()=> this.setState({counter3: this.state.counter3-5})}>-5</button>
    <button onClick={()=> this.setState({counter3: this.state.counter3-1})}>-1</button>
    <button onClick={()=> this.setState({counter3: 0})}>0</button>
    <button onClick={()=> this.setState({counter3: this.state.counter3+10})}>+10</button>
    <button onClick={()=> this.setState({counter3: this.state.counter3+5})}>+5</button>
    <button onClick={()=> this.setState({counter3: this.state.counter3+1})}>+1</button>

    </>
    )
  }
}


export default APP