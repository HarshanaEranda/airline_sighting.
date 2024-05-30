import React, { createContext,useState,useEffect, useCallback  } from 'react';
import useAirlineSightingListViewModel from '../viewmodels/AirlineSightingListViewModel';
import useAirlineSightingFormViewModel from '../viewmodels/AirlineSightingFormViewModel';
import { AirlineSightingModel } from '../models/AirlineSightingModel';
import airlineSightingService from '../services/airlineSightingService';


export const AirlineSightingContext = createContext();
const AirlineSightingProvider = ({ children }) => {
    // const getInitialListViewModel = useCallback(useAirlineSightingListViewModel, []);
    // console.log("get initialized",getInitialListViewModel);
    const initialListViewModel = useAirlineSightingListViewModel();
    const formViewModel = useAirlineSightingFormViewModel();
    // const listViewModel = useAirlineSightingListViewModel();
    const [listViewModel, setListViewModel] = useState(useAirlineSightingListViewModel());

    useEffect(()=>{
        setListViewModel(initialListViewModel)
    },[initialListViewModel])

    const updateList = listViewModel;

    const updateViewModel = (updatedViewModel) => {
        setListViewModel(updatedViewModel);
      };
    
    const addSighting = (newSighting) => {
    const updatedViewModel = {...listViewModel,
        sightings: [...listViewModel.sightings, newSighting],
    };
    updateViewModel(updatedViewModel);
    };

    const GetDetailViewModel = async(id) => {
        const response = await airlineSightingService.getSightingById(id);
        const obj = new AirlineSightingModel(response);
        return obj;
    }
    // useEffect(()=>{console.log("lst",listViewModel);},[])

    return (
        <AirlineSightingContext.Provider value={{ listViewModel, updateList, formViewModel, GetDetailViewModel,addSighting }}>
            {children}
        </AirlineSightingContext.Provider>
    );
};

export default AirlineSightingProvider;
