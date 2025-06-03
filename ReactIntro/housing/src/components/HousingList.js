import React, { useState } from 'react'
import { housingList } from './housingData';
import HousingLocation from './HousingLocation';


function HousingList() {
    const [filterText, setFilterText] = useState('');
    const filteredList = housingList.filter(location =>
        location.city.toLowerCase().includes(filterText.toLowerCase())
    )

    return (<div>
        <h1>Housing List</h1>
        <input
         type="text"
         placeholder="Sort by city..."
         value={filterText}
         onChange={(e) => setFilterText(e.target.value)}
        />
        {filteredList.map(location => (
            <HousingLocation key={location.id} location={location}/>
        ))}
    </div>);
};

export default HousingList;