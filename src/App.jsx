import React from "react";
import './App.css';
import Header from './Components/Header.jsx';
import Input from './Components/Input.jsx';
import Output from './Components/Output.jsx';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-emerald-500">
      <Header />
      <Input />
      <Output />
    </div>
  )
}

export default App;
