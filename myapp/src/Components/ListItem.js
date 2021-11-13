const ListItem = ({chore})=>{
    
    return(
        <li>
            <div>
             {chore}
             </div>
            <button style={{"backgroundColor":"crimson","color":"white"}}>Delete</button>
            
        </li>
    );
}
export default ListItem;