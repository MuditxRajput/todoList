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
    const[editablebool,setEditablebool] = useState(true)
    const[id,setId] = useState(null)
    const change = (e)=>{
            setName(e.target.value);
    }
    const add=()=>{
        
        if(name==='')
        {
            alert("Plzz enter your data");
        }
        else if(name && editablebool===false)
        {
            setList(
                list.map((elem)=>{
                    if(elem.id===id)
                    {
                        return{...elem,name:name}
                    }
                    return elem;
                })
            )
            setName(' ');
            setId(null);

        }
        else{
            let newList  =  {id:new Date().getTime().toString() , name:name}
            setList((val)=>[...val,newList]);
           
            setName('')

        }
    }
    const deleteList = (id) => {
        // console.log(id);
       const updateItem = list.filter((elem)=>{return elem.id!==id})
       setList(updateItem)
    };
    const edit = (id)=>{
        let editable = list.find((elem)=>{
            return id===elem.id
        });
        setEditablebool(false);
        // setEditable(editable.name)
        setName(editable.name);
        setId(id);
        
        
    }

    
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
                    // editablebool ={editablebool}
                    // editable ={editable}

                    />
                </div>
                <div>
                    <List
                    list = {list}
                    deleteList = {deleteList}
                    edit = {edit}
                    />
                </div>
            </div>
            <p className='text-white mt-20 flex justify-center'>Made by ©Mudit Rajput 😎</p>
            </div>
        </>
    )   
}
export default Form;