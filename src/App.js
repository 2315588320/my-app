import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Button from './Button';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [nameTC, setTxt] = useState("Hello")

  const updateText = (value) => {
    setTxt(value)
  }

  useEffect(() => {
    console.log("Hello")
  },[nameTC]);

  return (
    <div className='App'>
      <h1>{nameTC}</h1>
      <Name text={"My name is Ken"}></Name>
      <Button updateText={updateText}/>
    </div>
  );
}

export default App;
