import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

// function demo () {
//   return [1, 2];
// }

function App() {

  const [counter, setCounter] = useState(100); // 100

  // const [hello, setHello] = useState("Hello Fellas");


  // let counter = 0;

  const increase = (amarMorji) => {
    // counter = counter + 1;
    setCounter(counter + amarMorji) // 100 + 1 = 101 // 101 + 1 = 102
    // counter + 1 = 100 +1 = 101 // counter = 101  
  }
  const decrease = (amarMorji) => {
    setCounter(counter - amarMorji) // 100 - 1 = 99 // 99 - 1 = 98
  }

  return (
    <div className="App">
      <p>The value of the counter is {counter}</p>
      <button onClick= {() => increase(1)}>
        Increase By One
      </button>
      <button onClick= {() => increase(5)}>
        Increase By 5
      </button>
      <button onClick= {() => increase(100)}>
        Increase By 100
      </button>
      <button onClick = {() => decrease(1)}>
        Decrease By One
      </button>
      <button onClick = {() => decrease(10)}>
        Decrease By 10
      </button>
      <button onClick = {() => decrease(25)}>
        Decrease By 25
      </button>
    </div>
  );
}

// () => increase()
// () => increase()

export default App;
