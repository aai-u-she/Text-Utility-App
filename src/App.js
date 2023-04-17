// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//----title and aboutText are the props i.e properties
/* <Navbar title="TextUtility" aboutText = "About Us" />    */

function App() {
  //useState to check whether dark mode is enabled or not
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#030c29';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= '#86da7a';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
   <>
      <Router>
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode}/>   
      {/* <Navbar/>  */}
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path='/about' element = {<About/>} /> 
          <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading="Enter text here" mode={mode}/>} />
      </Routes>
      
       {/* <About /> */}
      </div>
      </Router>
      

  </>
  );
}

//to set default value of props we export it
export default App;
