import './App.css';
import Navbar from './components/Navbar';
import ShowProducts from './components/ShowProducts';
import Slider from './components/Slider';
import FeatureProduct from './Data/FeatureProduct';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Slider/>
     <FeatureProduct>
       <ShowProducts/>
     </FeatureProduct>
    </div>
  );
}

export default App;
