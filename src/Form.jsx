import { useEffect, useState } from 'react';
import Input from './Input';
import List from './List';
const getItem = ()=>{
    let list = localStorage.getItem('key');
    if(list)
    {
        return JSON.parse(localStorage.getItem('key'));
    }
    else{
        return [];
    }
 }
const Form = ()=>{
     

    const[name,setName] = useState('');
    const[list,setList] = useState(getItem());
    const change = (e)=>{
            setName(e.target.value);
    }
    const add=()=>{
        
        if(name==='')
        {

        }
        else{
            setList((val)=>[...val,name]);
           
            setName('')

        }
        
        

    }
    const deleteList = (id) => {
       const updateItem = list.filter((elem,ind)=>{return ind!==id})
       setList(updateItem)
    };
    

    
    useEffect(()=>{
        localStorage.setItem('key',JSON.stringify(list));
    },[list])
    return(
        <>
        <div className='flex flex-col '>

        
            <div className="bg-white w-[400px] 
             rounded-lg border-2 border-cyan-600 shadow-md hover:shadow-cyan-600 hover:shadow-xl shadow-cyan-400">
                <div>
                    <h1 className="flex justify-center mt-3 text-3xl font-serif">Todo List</h1>
                </div>
                <div>
                    <Input
                    change = {change}
                    add=  {add}
                    name = {name}
                    />
                </div>
                <div>
                    <List
                    list = {list}
                    deleteList = {deleteList}
                    />
                </div>
            </div>
            <p className='text-white mt-20 flex justify-center'>Made by ©Mudit Rajput 😎</p>
            </div>
        </>
    )   
}
export default Form;