import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { housingList } from './housingData'


function HousingDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = housingList.find(item => item.id === parseInt(id))

    const [editLocation, setEditLocation] = useState({ ...location })
    
    if(!location) {
        return <div>Location not found!</div>
    }
    
    const handleDelete = () => {
        const index = housingList.findIndex(item => item.id === parseInt(id));
        if (index !== -1) {
            housingList.splice(index, 1);
            navigate('/')
        }

    }

    return (<div>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            const index = housingList.findIndex(item => item.id === editLocation.id);
            if (index !== -1) {
                housingList[index] = editLocation;
                navigate('/')
            }
        }}
        >
            <h1>Edit: {editLocation.name}</h1>
            <img src={editLocation.photo} alt={editLocation.name} />
            <input name="name" value={editLocation.name} onChange={(e) => setEditLocation({ ...editLocation, name: e.target.value })} placeholder="Name" />
            <input name="city" value={editLocation.city} onChange={(e) => setEditLocation({ ...editLocation, city: e.target.value })} placeholder="Stadt" />
            <input name="availableUnits" type="number" value={editLocation.availableUnits} onChange={(e) => setEditLocation({ ...editLocation, availableUnits: parseInt(e.target.value) })} placeholder="Einheiten" />
            <input name="photo" value={editLocation.photo} onChange={(e) => setEditLocation({ ...editLocation, photo: e.target.value })} placeholder="Foto-URL" />
            <label>
                <input type="checkbox" checked={editLocation.wifi} onChange={(e) => setEditLocation({ ...editLocation, wifi: e.target.checked })} />
                WLAN
            </label>
            <label>
                <input type="checkbox" checked={editLocation.laundry} onChange={(e) => setEditLocation({ ...editLocation, laundry: e.target.checked })} />
                Waschmöglichkeit
            </label>
            <button type="submit">Speichern</button>
            <button type="button" onClick={handleDelete}>Löschen</button>
        </form>
    </div>)
};

export default HousingDetail;