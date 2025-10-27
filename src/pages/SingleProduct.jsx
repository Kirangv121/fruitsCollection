import { Link } from "react-router-dom"
import {useEffect, useState} from 'react'
import { useParams , useNavigate} from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./Products";
 



const SingleProduct  = () =>{


    const navigate = useNavigate()
    const {id} = useParams(); 

    const {products} = useContext(ProductContext)

    const product = products.find(
        (fruit) => fruit.name.toLowerCase() === id.toLowerCase()
    )
    if (!product) return <p className="text-center mt-10">Loading...</p>;






    return (
        <>

         <div className="container mx-auto mt-12" >
            

         
         
            <button 
            className="bg-blue-400 rounded-lg p-2 m-2  hover:bg-blue-800 cursor-pointer hover:text-white" 
            type="submit"
            onClick={() => navigate(-1)}
            >
            Back
             </button>
 
            <div className="flex gap-8">
                
                <img src="/images/pomo3.png" alt={product.name} className="w-50 object-cover rounded mb-2 bg-purple-100" />
                <div className="">
                    <h1 className="text-lg font-bold py-2">Name:{product.name}</h1>
                    <div className="text-md">Family: {product.family}</div>
                    <div className="text-md">Genus : {product.genus}</div>
                     <div className=" py-1 text-sm px-2">Calories:{product.nutritions.calories}</div>
                     <div className=" py-1 text-sm px-2">Carbohydrates:{product.nutritions.carbohydrates}</div>
                     <div className=" py-1 text-sm px-2">Fat: {product.nutritions.fat}</div>
                     <div className=" py-1 text-sm px-2">Sugar: {product.nutritions.sugar}</div>
                   <div className=" py-1 text-sm px-2">Protein :  {product.nutritions.protein}</div>
                    <div className="font-bold mt-2">Rs.500</div>
                     <div className="m-4">
                        <button className="px-4 py-1 rounded-full text-white font-bold bg-yellow-500 hover:bg-yellow-600">ADD CART</button>
                </div>
                </div>


            </div>

            


    
        
         
         </div>
        
        
        
        
        </>
    )
}

export default SingleProduct