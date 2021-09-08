import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductDetails from './components/ProductDetails';
import SingleProductContext from './Data/SingleProductContext';
import CartContextProvider from './Data/CartContext';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <CartContextProvider>
    <SingleProductContext>
    <Navbar/>
      <Route component={Home} path="/" exact/>
      <Route component={ProductDetails} path="/product-details" exact/>
      </SingleProductContext>
      <Route path="/cart" component={Cart}/>
      </CartContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
