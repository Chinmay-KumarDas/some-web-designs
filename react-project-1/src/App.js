import './App.css';
import { Explore } from './Components/Explore/Explore';
import { Footer } from './Components/Footer/Footer';
import { Hot } from './Components/Hot/Hot';
import { SearchArea } from './Components/SearchArea/SearchArea';

function App() {
  return (
    <div className="App">

    <SearchArea></SearchArea>
    <Hot></Hot>
    <Explore></Explore>
    <Footer></Footer>

    </div>
  );
}

export default App;
