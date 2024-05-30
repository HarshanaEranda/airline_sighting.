import React, { useContext ,useEffect } from 'react';
import { AirlineSightingContext } from '../contexts/AirlineSightingContext';
import { Link } from 'react-router-dom';

const AirlineSightingList = () => {

    const { listViewModel } = useContext(AirlineSightingContext);
    const { sightings } = listViewModel;
    
    useEffect(() => {
        console.log('listViewModel changed:', sightings);
        console.log('listViewModel:', listViewModel);
    }, [listViewModel]);

    return (
        <div>
            <h1>Airline Sightings</h1>
            <Link to="/add">Add New Sighting</Link>
            <br></br>
            <ul>
                {sightings.map(sighting => (
                    <li key={sighting.id}>
                        <Link to={`/sighting/${sighting.id}`}>{sighting.airlineName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AirlineSightingList;
