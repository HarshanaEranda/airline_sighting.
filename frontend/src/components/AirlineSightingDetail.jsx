import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AirlineSightingContext } from '../contexts/AirlineSightingContext';

const AirlineSightingDetail = () => {
    const { id } = useParams();
    const { GetDetailViewModel } = useContext(AirlineSightingContext);
    const [sighting, setSighting] = useState(null);

    useEffect(() => {
        GetDetailViewModel(id) .then((result) => {
            setSighting(result);
        });
    }, [id, GetDetailViewModel]);

    if (!sighting) return <div>Loading...</div>;

    return (
        <div>
            <h1>{sighting.airlineName}</h1>
            <p>Short Name: {sighting.airlineShortName}</p>
            <p>Code: {sighting.airlineCode}</p>
            <p>Location: {sighting.location}</p>
            <p>Date: {new Date(sighting.createdDate).toLocaleString()}</p>
            {sighting.photoUrl && <img src={sighting.photoUrl} alt={sighting.airlineName} />}
        </div>
    );
};

export default AirlineSightingDetail;
