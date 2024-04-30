import './App.css';
import { useState } from "react";
import {Aside} from "../src/components/Aside/Aside";
import { Dash } from "./components/Dash/Dash";


function App() {
  const [showAside, setShowAside] = useState(true);

  const toggleAside = () =>{
    setShowAside(!showAside);
  };

  return (
   <div className='app'>
    {showAside&&<Aside toggleAside ={toggleAside}></Aside>}
    <Dash toggleAside = {toggleAside} showAside={showAside}></Dash>
   </div>
  );
}

export default App;
