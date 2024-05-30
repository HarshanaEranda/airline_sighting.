import { useState, useEffect } from 'react';
import airlineSightingService from '../services/airlineSightingService';

const useAirlineSightingListViewModel = () => {
    const [sightings, setSightings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSightings = async() => {
            try {
                const data = await airlineSightingService.getAllSightings();
                setSightings(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchSightings();
    }, []);

    // const updateList = async () => {
    //     console.log(">>>>>>", "in updatelist")
    //     try {
    //         const data = await airlineSightingService.getAllSightings();
    //         setSightings(data);
    //         setLoading(false);
    //         console.log("####### loaded")
    //     } catch (error) {
    //         setError(error);
    //         setLoading(false);
    //     }
    // }

    return {
        sightings,
        loading,
        error
        // ,
        // updateList
    };
};

export default useAirlineSightingListViewModel;
