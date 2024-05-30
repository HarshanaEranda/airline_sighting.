import React, { useContext, useState } from 'react';
import { AirlineSightingContext } from '../contexts/AirlineSightingContext';
import { AirlineSightingModel } from '../models/AirlineSightingModel';

const AirlineSightingForm = () => {
    const { listViewModel, formViewModel,addSighting } = useContext(AirlineSightingContext);
    const { form, handleChange, handleSubmit} = formViewModel;
    const [viewModel, setViewModel] = useState(listViewModel);

    const updateViewModel = (updatedViewModel) => {
        setViewModel(updatedViewModel);
      };
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     // Create a new AirlineSightingModel instance with the form data
    //     const newSighting = new AirlineSightingModel(form);

    //     // Update the viewModel by creating a new array with the existing sightings and the new sighting
    //     const updatedViewModel = {
    //         ...listViewModel,
    //         sightings: [...listViewModel.sightings, newSighting],
    //     };


    //     // Update the viewModel state with the updated viewModel
    //     setViewModel(updatedViewModel);

    //     // Call the original handleSubmit function from the formViewModel
    //     handleSubmit(event);
    // };


    return (
    // <AirlineSightingContext.Provider value={{ viewModel, formViewModel, GetDetailViewModel}}>
        <form  onSubmit={(formData, handleSubmit) => {
            const newSighting = new AirlineSightingModel(formData);
            addSighting(newSighting);
            handleSubmit(); // Call the handleSubmit function from formViewModel
          }}>
            <input type="text" name="airlineName" value={form.airlineName} onChange={handleChange} placeholder="Airline Name" required />
            <input type="text" name="airlineShortName" value={form.airlineShortName} onChange={handleChange} placeholder="Short Name" required />
            <input type="text" name="airlineCode" value={form.airlineCode} onChange={handleChange} placeholder="Code" required />
            <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
            <input type="datetime-local" name="createdDate" value={form.createdDate} onChange={handleChange} required />
            <input type="text" name="photoUrl" value={form.photoUrl} onChange={handleChange} placeholder="Photo URL" />
            <button type="submit">Submit</button>
        </form>
                //     <button type="button" onClick={(event)=>{
                //         const newSighting = new AirlineSightingModel(form);

                //         const updatedViewModel = {
                //             ...listViewModel,
                //             sightings: [...listViewModel.sightings, newSighting],
                //         };
                
                // console.log("updated: ", updatedViewModel)
                //         // Update the viewModel state with the updated viewModel
                //         setViewModel(updatedViewModel);
                //         handleSubmit(event);
                //     }}>Submit</button>

        //  </AirlineSightingContext.Provider>
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="airlineName" value={form.airlineName} onChange={handleChange} placeholder="Airline Name" required />
        //     <input type="text" name="airlineShortName" value={form.airlineShortName} onChange={handleChange} placeholder="Short Name" required />
        //     <input type="text" name="airlineCode" value={form.airlineCode} onChange={handleChange} placeholder="Code" required />
        //     <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
        //     <input type="datetime-local" name="createdDate" value={form.createdDate} onChange={handleChange} required />
        //     <input type="file" name="imageFile" accept="image/*" onChange={handleImageUpload} required />
        //     <button type="submit">Submit</button>
        // </form>

    );
};

export default AirlineSightingForm;
