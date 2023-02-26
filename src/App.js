import logo from './logo.svg';
import './App.css';
import tw, { styled } from 'twin.macro';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
          <Test toggle={toggle}>Test Component</Test>
          <TestButton onClick={() => setToggle(!toggle)}>Click me to test styledComponents</TestButton>
          Learn React
      
      </header>
    </div>
  );
}

export default App;

const TestButton = tw.button`text-white p-4 bg-blue-500 rounded-xl my-10`


const Test = styled.p(({toggle}) => [
  tw`text-red-500`,
  toggle && tw`text-blue-500`,
])
