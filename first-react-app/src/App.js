
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const products=[
    {name:'Photoshop', price:'100$'},
    {name:'Windows-7', price:'200$'},
    {name:'Windows-8', price:'300$'},
    {name:'Windows-10', price:'10$'},
    {name:'iPhone-7', price:'150$'},
    {name:'iPhone-8', price:'170$'},
    {name:'iPhone-X', price:'100$'},
    {name:'iPhone-XI', price:'100$'},
    {name:'iPhone-12', price:'100$'},
    {name:'iPhone-7-plus', price:'100$'},
  ]

  return (
    <div className="App">
      <header className="App-header">

        <div style={{border:'2px solid goldenrod',margin:'10px'}}>
            <Users></Users>
        </div>

        <div style={{border:'2px solid red',margin:'10px'}}>
            <Counter></Counter>
        </div>

        <div style={{border:'2px solid pink',margin:'10px'}}>
            <Products product={products[0]}></Products>
            <Products product={products[1]}></Products>
            <Products product={products[2]}></Products>
            <Products product={products[3]}></Products>
            <Products product={products[4]}></Products>
            <Products product={products[5]}></Products>
            <Products product={products[6]}></Products>
            <Products product={products[7]}></Products>
            <Products product={products[8]}></Products>
            <Products product={products[9]}></Products>
        </div>

    <div style={{border:'2px solid red',margin :'10px'}}>
        {
            products.map(prod=><Products product={prod}></Products>)
        }
    </div>


       <div style={{border:"2px solid green",margin:"10px"}}>
          <p>React component practice basic without argument</p>
          <PersonComponent></PersonComponent>
          <PersonComponent></PersonComponent>
          <PersonComponent></PersonComponent>
       </div>
       <div style={{border:"2px solid goldenrod",margin:"10px"}}>
          <p>React component practice basic with argument</p>
          <Animal name="ELEPHANT" color="GRAY" area="INDIA"></Animal>
          <Animal name="TIGER" color="YELLOW" area="BANGLADESH"></Animal>
          <Animal name="LION" color="WHITE" area="SHAHARA"></Animal>
       </div>
      </header>
    </div>
  );
}

function  Users() {
  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUser(data));
  },[]);
  return(
    <div>
      <h1>Dyamic user total: {user.length}</h1>

      {
        user.map(u=><h3>{u.name}</h3>)
      }

    </div>
  )
}

function Counter() {
  const [count,setCount] = useState(10);
  const handleIncrease =()=>{
    setCount(count+1);
  };
  return (<div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
  )
}

function Products(props) {
  const productStyle={
    border:'2px soild black',
    width:'300px',
    height:'300px',
    float:'left',
    margin:'10px',
    background:'orange'
  }

  return <div style={productStyle}>
    <h3>{props.product.name}</h3>
    <h2>{props.product.price}</h2>
    <button>Buy now</button>
  </div>

}

function PersonComponent(){

  const personStyle={
    border:'2px solid red',
    width:'800px',
    margin:'10px'
  }
  return <div style={personStyle}>
    <h1>Sakib</h1>
    <p>Cell: 01555555</p>
    <p>Dhaka Bangladesh</p>
  </div>

}

function Animal(data){
  const animalStyle={
    border:'2px solid yellow',
    width:'800px',
    margin:'10px'
  }
  return <div style={animalStyle}>
      <h1>{data.name}</h1>
      <p>{data.color}</p>
      <p>{data.area}</p>
  </div>
}

export default App;
