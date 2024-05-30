import axios from 'axios';

const API_URL = 'http://localhost:5065/api/AirlineSightings';

const getAllSightings=()=> {
    return fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    });
};

const getSightingById = (id) => {
    return fetch(`${API_URL}/${id}`).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    });
};
const createSighting = async (sighting) => {
    try {
        const response = await axios.post(API_URL + "/create", sighting);
        // Handle the response data (e.g., display a success message)
        console.log("Sighting created:", response.data);
        return response;
    } catch (error) {
        // Handle any errors (e.g., display an error message)
        console.error("Error creating sighting:", error);
    }
};

const updateSighting = (id, sighting) => {
    return axios.put(`${API_URL}/${id}`, sighting);
};

const deleteSighting = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllSightings,
    getSightingById,
    createSighting,
    updateSighting,
    deleteSighting
};
