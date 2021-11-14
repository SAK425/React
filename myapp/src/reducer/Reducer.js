
    
const Reducer =(state={},action)=>{
    const {type,payload} = action
switch(type){
   case "Delete_item":
        return state.filter(item=>item.id!==payload)
   case "Add_item":
        return [...state,payload]
    default:
        return state
}
}
export default Reducer;