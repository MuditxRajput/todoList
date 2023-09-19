import { useState } from "react";
import List from './List';

function  App(){
  const[intialVal , upDateVal] = useState("");
  const[Items,setItems] = useState([])
  const adding=(e)=>{
    upDateVal(e.target.value);
  }
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems,intialVal];
    })
    upDateVal("");
  }
  const deleteItem=(id)=>{
    return(
      setItems((oldItems)=>{
          return oldItems.filter((arr,index)=>{
            return index!=id;
          })
      })
    )
  }
return(
  <>
  <div className="main_div">
    <div className="centre_div">
    <h1>ToDo List</h1>
    </div>
    <hr/>
      <div className="input_text">
      <input type="text" placeholder="Add a items" onChange={adding}
      value ={intialVal} />
      <button onClick={listOfItems}> +
      </button>
      </div>
      <div className="list">
        <ul type ="none">
        {Items.map((itemVal,index)=>{
          return( <List
            id ={index}
            text = {itemVal}
            onSelect = {deleteItem}
          />)
        })}
          
        </ul>
      </div>

    </div>

 
  </>
)

}

export default App;