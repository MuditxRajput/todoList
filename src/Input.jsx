const Input =({ change, add,name })=>{
    // const inputValue = editablebool === 'true' ? editable : name;
    return(
        <>
        {/* {console.log(editable)} */}
        <div className="flex  items-center mt-3 justify-center ">

        <input type="text" placeholder="Enter your text here..."
        className="border-2 border-black w-64 px-6 text-md  py-2
        rounded-full  focus:text-red-500 " 
        onChange={change}
        
        value={name}
        
        />
        <button className="bg-red-500 rounded-full z-3 
        absolute ml-48 px-4 py-2 text-white border-2 font-bold border-black shadow-md hover:shadow-red-500" onClick={add}>Add</button>
        </div>
        
        </>
    )
}
export default Input