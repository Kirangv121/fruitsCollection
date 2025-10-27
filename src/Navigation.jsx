import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ProductContext } from "./pages/Products";

const Navigation =() =>{
    const cartStyle ={
        background: "#faead4ff",
        display : "flex",
        padding : "8px 12px",
        margin : "10px",
        gap :"2",
        borderRadius : "50px"
    }

    const {cart} = useContext(ProductContext)

    return(
        <>
        <nav className="container mx-auto flex items-center justify-between">
        
            <Link to="/">
            <img  style={{height: 45}} src="/images/pomo2.png" alt="logo"/>       
             </Link>
             <ul className="flex items-center">

             <li>   
                    <Link   className="ml-6" to= "/">Home </Link>
                    <Link  className="ml-6" to= "/about">About </Link>
                     <Link  className="ml-6" to= "/products">Products </Link>
                    <Link  className="ml-6" to= "/cart">Cart </Link>
               
               </li>
             <li>
                   <Link to= "/cart">
                   <div style={cartStyle}>
                    <span>{cart.totalItems}</span>
                    <img className="ml-2" style={{height : 30}} src="/images/cart.png" alt="cart-icon"></img>
                    
                    </div></Link>
             </li>
                


             </ul>
            
           
        </nav>


        </>
    )
}

export default Navigation