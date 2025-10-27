const Product = () =>{
    return(
        <>
        <div>
                <img src="/images/apple.png" alt="pomo" />
                <div className="text-center">
                <h2 className="text-lg font-bold py-2">Apple</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                </div>
                <div className="flex justify-between items-center mt-4 ml-4 ">
                    <span>Rs.500</span>
                    <button className="px-4 py-1 rounded-full text-white  bg-yellow-500 hover:bg-yellow-600">ADD</button>
                </div>
                

            </div>

        
        </>
    )
}
export default Product
