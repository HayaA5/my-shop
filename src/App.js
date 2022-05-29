
import './App.css';
import Categories from './components/Categories';
import Product from './components/Product';
import ProductsList from './components/ProductsList'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Categories/>
      {/* <ProductsList/>
      <Product/> */}
    </BrowserRouter>






  );
}

export default App;
