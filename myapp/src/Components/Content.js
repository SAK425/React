/*import { useState } from "react";
const Content = () =>{
  const [items,setItems] = useState([])
  const [value,setValue] = useState('')
  const handleSubmit = ()=>{
   setItems(prev=>[...prev,value])
   setValue('')
   
  }
  const handleInput = (e) =>{
    setValue(e.target.value)
    //console.log("change")
  }
  const handleDelete = (item)=>{
            setItems(prev=>prev.filter((i => i!==item)))
  }
  return(
    <>
    <h2>Todo</h2>
      <input value={value} onChange={handleInput} type = "text"/>
      <button onClick={handleSubmit} type="submit">Add</button>
    
    <ul>
      {items.map(item=><li>{item} <button onClick={()=>{handleDelete(item)}}>Delete</button></li>)}
    </ul>
    </>
  )
}
export default Content;
*/
import { useState, useEffect } from "react";

const Content = () => {

   
    const [counter, setCounter] = useState(0)
    const [Content,setContent] = useState([])
    const APICall = async ()=>{
          const res = await fetch("https://jsonplaceholder.typicode.com/photos")
          const data = await res.json()
          setContent(data)
    }
        
    useEffect(()=>{
      APICall()
    },[])
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => { setCounter(prev => prev + 1) }} >Click Me </button>
            <ul>
              {Content.map(item=><li style={{margin:"10px",border:"3px solid black"}}>{item.title}</li>)}
            </ul>
        </div>);
}

export default Content;
