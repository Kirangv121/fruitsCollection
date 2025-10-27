import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router ,Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './Navigation'
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import SingleProduct from './pages/SingleProduct'
import { ProductContext } from './pages/Products'

function App() {

   const [products,setProducts] = useState([]);
   const [cart, setCart] = useState({});



     useEffect(()=>{
  fetch("https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all")
    .then(response => response.json())
    .then(data=>{
      setProducts(data);
      console.log(data)
    })
    .catch(err => console.error(err));
},[]);


    useEffect(()=>{

      const cart = window.localStorage.getItem('cart');
      console.log(JSON.parse(cart));

    },[])

    useEffect(()=>{
            window.localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])




  return (
    <>

    <Router>
   

 
 <ProductContext.Provider value={{products, cart, setCart}}>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path= '/products' element={<Products/>}/>
         <Route path= '/products/:id' element={<SingleProduct/>}/>
        
     
        <Route path ='/cart' element={<Cart/>} />
      
      </Routes>
  </ProductContext.Provider>

    </Router>
      
    </>
  )
}

export default App
