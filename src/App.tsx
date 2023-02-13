import { useState } from 'react'

import './App.css'

function App() {
const [name, setName] = useState(0);

  const Inchandler = () => {
    setName(name + 1);
    if(name == 20){
      alert('max passengers reached for this ride');
      setName(0);
    }
  }
  const Dechandler = () => {
    setName(name - 1);
    if(name == 0){
      alert("number of passengrs can't be zero(0)");
      setName(0);
    }
  }
  const passCheck = () => {
    if (name < 15) {
       alert("Each ride must contain more than or atleast 15 passengers");
       
    }else{
    alert("ride statrted");
  }
  }
  
  return (
    <div className="App">
      <div className="title">
        <p>passenger counter app</p>
      </div>
      <div className="number">
          <h4 id='num'>{name}</h4>
      </div>
<div className="btns">
   <button id='inc' onClick={Inchandler}>++ num</button>
   <button id='dec' onClick={Dechandler}>-- num</button>
</div>
<div className="pass">
  <button onClick={passCheck}>start</button>
</div>
<div className="notes">
  <ul>
    <li>++num : increments the numbers of passengers in by 1</li>
    <li>--num : removes or subtracts 1 from the number of passengers</li>
  </ul>
</div>
     
    </div>
  )
}

export default App
