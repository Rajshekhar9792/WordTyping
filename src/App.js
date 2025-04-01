
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  // const [state, setState] = useState(initialState)
  const [mode, setMode] = useState('light') //weather darkmode is Enabled or not
  const [text, setText] = useState('text') 
  const [alert, setAlert] = useState(null) 
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);

    },3000);

  }
  // const [title, setTitle] = useState('title') 
  let toggleMode= () =>{
    if(mode === "light"){
      setMode('dark')
      setText('light')
      document.body.style.backgroundColor = 'white';
      showAlert('dark mode is Enabled','success ')
      document.title='textutils - darkmode';
    //   setInterval(() =>{
    //     document.title = 'install linkdin app just now';
    //   },1500)
    //   setInterval(() =>{
    //     document.title = 'install Byjus app just now';
    //   },3000)
    }
    else{
      setMode('light')
      setText('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert('light mode is Enabled','success ')
      document.title='textutils - lightmode';
    }

  }
  
  return (
  <>
<Alert alert = {alert}/>
<div className="container my-3">
<BrowserRouter>
<Navbar title = "Textutils" mode = {mode} toggleMode = {toggleMode} text = {text}/>
{/* <TextForm showAlert={showAlert} heading = "Enter the Text to analyze below" mode = {mode}/> */}
<Routes>
          <Route exact path="/about" element={ <About />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Try Textutils -> Word Counter & Charecter Counter" mode = {mode}/>}></Route>  
</Routes>
</BrowserRouter>
</div>
</>
  );
}

export default App;
