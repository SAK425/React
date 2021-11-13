//import Navbar from './layouts/Navbar';
//import Footer from './layouts/Footer';
//import Content from './Components/Content';
//import './index.css'
import React from 'react';
//import Description from './Components/Description';
//import DescriptionTwo from './Components/DescriptionTwo';
import One  from './Components/One';
//import Two from './Components/Two';
import {useState} from 'react';
const App = () => {
  const [data,setdata] = useState([{password:"abcd"},{password:"12345"}])

  return (
    <div>
      
     { /*<Description admin={false}/>
      <DescriptionTwo/>*/ }
      <One/>
      
    </div>
  );
}



export default App;
