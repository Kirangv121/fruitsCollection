import Product from "./Product"
import { useState , useEffect,createContext, useContext } from "react";
import cors from "cors"
import Product1 from "./Product1"

export const ProductContext = createContext();
const Products =() =>{
  const { products } = useContext(ProductContext);


return (
    <> 
    <div className="container mx-auto pd-24">
        <h1 className="text-lg font-bold my-8">Local instant available Products</h1>
             <div className="grid grid-cols-3 gap-6 my-8">
                <Product/>
                  </div>
     </div>


     <div className="container mx-auto pd-24">
        <h1 className="text-lg font-bold my-8">Products</h1>
             <div className="grid grid-cols-3 gap-6 my-8">
              
              {products.map((fruit,index)=>(

                <Product1 key={index} product={fruit}/>
              ))}    
                  </div>
     </div>
    
    </>
)

}

export default Products;