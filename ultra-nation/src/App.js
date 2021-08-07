import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
 const [countries,setCountries]= useState([]);
 
 const [cart,setCart]=useState([])

 const handelCountryButton=(country)=>{
  const newCart =  [...cart,country];
  setCart(newCart);
 };

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response=>response.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error));
  },[]);

  return (
    <div>
      <div>
        country added : {cart.length}
      </div>
      <Cart cart={cart}></Cart>
        {
            countries.map(country=><Country country={country} handelCountryButton={handelCountryButton} key={country.alpha2Code}> </Country>)
        }
        
    </div>
  );
}

export default App;
