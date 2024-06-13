import "./App.css";
import Alerts from "./components/Alerts";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message,type)=>{
    setAlert({
      message : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("Dark");
      document.body.style.backgroundColor = "black";
      handleAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title = "TextUtils" toggleMode = {toggleMode}/>
        <Alerts alert={alert}/>
        <Routes>
          <Route path = "/" element={<TextForm heading = "Enter the text to transform" mode = {mode} handleAlert={handleAlert}/>}></Route>
          <Route path = "/about"  element={<About mode = {mode}/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
