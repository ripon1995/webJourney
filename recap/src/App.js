//import logo from './logo.svg';
import { useState,useEffect } from 'react';
import './App.css';

function App() {

  const [userDetails,setUser]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>setUser(data));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:'5px solid brown' ,margin:'20px'}}>
        <UserCounter></UserCounter>
      </div>
      <div style={{border:'5px solid red'}}>
        {
          userDetails.map(item=><User userData={item}></User>)
        }
      </div>

      </header>
    </div>
  );
}

function UserCounter(){

  let [presentState,setCount]=useState(0);

  const counterStyle={
    border:'2px solid pink'

  }

  const handeUser=()=> {
    presentState++ ;
    setCount(presentState);
  };

  return(
    <div style={counterStyle}>
      <p>Total User: {presentState}</p>
      <button onClick={handeUser}>Add user</button>
    </div>
  )
}

function User(data){
  const userStyle={
    border:'2px solid goldenrod',
    margin:'10px',
    width: '500px',
    height: '300px',
    float:'left'
  };

  return(
    <div style={userStyle}>
        <p>NAME: {data.userData.name} </p>
        <p>Cell: {data.userData.phone} </p>
        <p>Occupation: {data.userData.company.name}</p>
    </div>
  )

}

export default App;
