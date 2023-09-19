import React from 'react';
const List =(props)=>{
    
    return (
            <>
            <div className='items_val'>
            <i class="fa-solid fa-x" onClick={()=>{props.onSelect(props.id)}}></i>
            <li>{props.text}</li>
            
            </div>
            </>
    )
}
export default List;