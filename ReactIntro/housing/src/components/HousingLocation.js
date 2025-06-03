import React from 'react'
import { Link } from 'react-router-dom'

function HousingLocation({location}) {
    return (<div>
        <img src={location.photo} alt={location.name} style={{width: '100px', height: '100px'}}/>
        <h2>{location.name}</h2>
        <p>{location.city}</p>
        <p>Available Units: {location.availableUnits}</p>
        <p>Wifi: {location.wifi}</p>
        <Link to={`/details/${location.id}`}>Discover more</Link>
    </div>)
};

export default HousingLocation;