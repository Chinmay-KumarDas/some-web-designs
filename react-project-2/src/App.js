
import './App.css';
import { useState } from 'react';
import { Aside } from './components/Aside/Aside';
import { Dash } from './components/Dash/Dash';



function App() {
  
  const [showAside, setShowAside] = useState(false);

  const toggleAside = () => {
    setShowAside(!showAside);
  };

  const closeAside = () =>{
    if(showAside)
    setShowAside(false);
  }

  return (
    <div className="App">
      {showAside&&<Aside></Aside>}
      <Dash toggleAside={toggleAside} closeAside={closeAside}></Dash>
    </div>
  );
}

export default App;
