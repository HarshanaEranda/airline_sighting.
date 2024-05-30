// import React,{ useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import airlineSightingService from '../services/airlineSightingService';
// import { AirlineSightingModel } from '../models/AirlineSightingModel';
// import { AirlineSightingContext } from '../contexts/AirlineSightingContext';

// const useAirlineSightingFormViewModel = () => {
//     const navigate = useNavigate();

//     const { updateListViewModel } = useContext(AirlineSightingContext);

//     const [form, setForm] = useState({
//         airlineName: '',
//         airlineShortName: '',
//         airlineCode: '',
//         location: '',
//         createdDate: '',
//         photoUrl: ''
//     });


//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const newSighting = new AirlineSightingModel(form);
//         // updateListViewModel
//         const response = await airlineSightingService.createSighting(newSighting);
//         console.log("response",response);
//         // await airlineSightingService.getAllSightings();
//         navigate('/');
//     };

//     // const handleImageUpload = (e) => {
//     //     const [file] = e.target.files;
//     //     if (file) {
//     //         setForm({
//     //             ...form,
//     //             imageFile: file,
//     //         });
//     //     }}
//     return {
//         form,
//         handleChange,
//         handleSubmit
//         };
// };

// export default useAirlineSightingFormViewModel;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import airlineSightingService from '../services/airlineSightingService';
import { AirlineSightingModel } from '../models/AirlineSightingModel';
import { AirlineSightingContext } from '../contexts/AirlineSightingContext';

const useAirlineSightingFormViewModel = () => {
    const navigate = useNavigate();

    // const { updateListViewModel } = useContext(AirlineSightingContext);

    const [form, setForm] = useState({
        airlineName: '',
        airlineShortName: '',
        airlineCode: '',
        location: '',
        createdDate: '',
        photoUrl: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSighting = new AirlineSightingModel(form);
        // Update the listViewModel with the new data
        // For example: updateListViewModel(response.data);
        const response = await airlineSightingService.createSighting(newSighting);
        console.log("response", response);
        // Navigate to the desired page (e.g., home page)
        navigate('/');
    };

    // const handleImageUpload = (e) => {
    //     const [file] = e.target.files;
    //     if (file) {
    //         setForm({
    //             ...form,
    //             imageFile: file,
    //         });
    //     }}
    return {
        form,
        handleChange,
        handleSubmit
    };
};

export default useAirlineSightingFormViewModel;
