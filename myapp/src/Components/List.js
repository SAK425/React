
import {useSelector,useDispatch} from 'react-redux'
const List = () => {
    const items = useSelector(state=>state)
 const dispatch = useDispatch()
    console.log(items)
    const handleDelete =(id)=>{
        console.log(id)
        const action={
            type:"Delete_item",
            payload:id
        }
        dispatch(action)
    }

    return (
        <div>
         <ul>
           {
               items.map(item=><><li>{item.text}<button onClick={()=>handleDelete(item.id)}>Delete</button></li></>)
           }
         </ul>
        </div>
    )
}

export default List
