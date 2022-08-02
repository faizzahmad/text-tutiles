
import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
 const [mode, setmode] = useState("light");
 const [alert, setalert] = useState(null)
const showalert = (message,type) =>{
  setalert({
    message : message,
    type : type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
}
 const togglemode = ()=>{
  if(mode === "light"){
     setmode("dark")
     document.body.style.backgroundColor = "#042743";
     showalert("dark mode has been enabled", "success")
     document.title = ("Texttutiles-Darkmode") 
  }
  else{
    setmode("light")
    document.body.style.backgroundColor = "white";
    showalert("light mode has been enabled", "success")
    document.title= ("Text-tutiles-Lightmode")
  }
 }
  return (
   <>
   <Navbar title="Texttutiles" mode= {mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
   <div className="container my-3">
   <TextForm showalert={showalert} heading = "Enter text here to analyze below" mode = {mode}/>
   {/* <About/> */}
   </div>
   </>
  )
}

export default App;
