import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const[Mode,setMode]=useState('light');
  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor="#0b1e42";
    }
    else {
        setMode('light');
        document.body.style.backgroundColor="white";
    }
};
  return (
    <>
    <Navbar mode={Mode} toggleMode={toggleMode}/>
    <div className="container my-2">
    <Textform heading="Enter The Text" mode={Mode}/>
    {/* <Alerts alert="this is alert"/> */}
    {/* <div className="container my-2">
      <Router>
    <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <Textform heading="Enter The Text" mode={Mode}/>
          </Route>
        </Switch>
    </Router> */}
      
    </div>
    </>
  );
}

export default App;
