import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './mycomponent/Product'

function App() {
  const friends = ["faisal","sakib","lutfor","sumon","masud"];
  const products = [
    {name : "Mobile" , price : "$99.49"},
    {name : "TV" , price : "$44.49"},
    {name : "PC" , price : "$42.49"}
]
const productNames = products.map(element => element.name);
console.log(productNames);
  return (
    <div className="App">
      <Users></Users>
      <Count></Count>
       <Person name="faisal rahman" job="Developer"></Person>

      <ul>
         {
            friends.map(element => <li>{element}</li>)
         }
       
      </ul>

         {
            products.map(pd =><Product>name={pd}</Product>)
            
         }
      <Product product={products[0].name} price={products[0].price}></Product>
      
       
   
    </div>
  );
}

function Users(){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
     return (
         <div>
             <h2>Dynamically Users Count :{users.length} </h2>
            <ul>
            {
                users.map(user => <li>{user.name}</li>)
             }
            </ul>
         </div>
     )
}






function Count(){
  const [count,setCount] = useState(10);
  const handlerIncrease = () =>{
       const NewCount = count + 1;
       setCount(NewCount);
  }
   return (
      <div>
          <h3>Count : {count}</h3>
          <button onClick={()=>setCount(count-1)}>Decrease</button>
          <button onClick={()=>setCount(count+1)}>Increase</button>
      </div>
   )
}


function Person(props){
  const PersonStyle={
     border : "2px solid red",
     margin : "10px"
  }
   return (
       <div style={PersonStyle}>
           <h2>Name : {props.name}</h2>
           <h4>Job : {props.job}</h4>
       </div>
   )
}




export default App;
