import React from 'react';
import './Country.css';

const Country = (props) => {

    const {name,population,region,flag}=props.country;

   

    return (
        <div className="country-main">
            <div className="country-container">
                <h2>{name}</h2>
                <img src={flag} alt="" />
                <h3>Population: {population}</h3>
                <h3>Region: {region}</h3>
                <button onClick={()=>props.handelCountryButton(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;