import React from 'react';

const List = ({list,deleteList,edit})=>{
    return (
        <>
        <div>
           {list.map((val)=>{
            //    console.log(val);
            return (
                <div className=' flex justify-between items-center  ml-20 rounded-md w-60 bg-purple-600 my-3'>
                    <h1 className='px-3 py-1 text-white'key={val.id}>{val.name}</h1>
                    {/* <button className=' cursor-pointer px-3  py-1 bg-red-500 text-white rounded-md' onClick={()=>deleteList(val.id)}>Remove</button> */}
                    <div>
                        <i class="fa-solid fa-trash" style={{ marginRight: '15px' }} onClick={()=>deleteList(val.id)}></i>
                        <i class="fa-regular fa-pen-to-square  " style={{ marginRight: '15px' }} onClick={()=>edit(val.id)}  ></i>
                    </div>
                    
                    
                </div>
            )
           })}
        </div>
        </>
    )
}
export default List;

{/* <div className='flex justify-between items-center ml-20 rounded-md w-60 bg-purple-600 my-3' key={val.id}>
                            <h1 className='px-3 py-1 text-white'>{val.name}</h1>
                            <button className='cursor-pointer px-3 py-1 bg-red-500 text-white rounded-md'>Remove</button>
</div> */}