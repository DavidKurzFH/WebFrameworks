import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { housingList } from './housingData'

function HousingAdd() {
    const navigate = useNavigate();
    const [newLocation, setNewLocation] = useState({
        id:Date.now(),
        name: '',
        city: '',
        availableUnits: 0,
        photo: '',
        wifi: false,
        laundry: false
    })
    const handleChange = (e) =>{
        const {name, value, type, checked} = e.target
        setNewLocation({
            ... newLocation,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        housingList.push(newLocation)
        navigate('/')
    }

    return (<div>
        <form onSubmit={handleSubmit}>
        <h2>Neue Wohnung hinzufügen</h2>
        <input name="name" value={newLocation.name} onChange={handleChange} placeholder="Name" required />
        <input name="city" value={newLocation.city} onChange={handleChange} placeholder="Stadt" required />
        <input name="availableUnits" type="number" value={newLocation.availableUnits} onChange={handleChange} placeholder="Einheiten" required />
        <input name="photo" value={newLocation.photo} onChange={handleChange} placeholder="Bild-URL" />
        <label>
            <input type="checkbox" name="wifi" checked={newLocation.wifi} onChange={handleChange} />
            WLAN
        </label>
        <label>
            <input type="checkbox" name="laundry" checked={newLocation.laundry} onChange={handleChange} />
            Waschmöglichkeit
        </label>
        <button type="submit">Speichern</button>
    </form>
    </div>)
};

export default HousingAdd;