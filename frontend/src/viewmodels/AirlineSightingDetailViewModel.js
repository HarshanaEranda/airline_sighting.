import { useState, useEffect } from 'react';
import airlineSightingService from '../services/airlineSightingService';
import { AirlineSightingModel } from '../models/AirlineSightingModel';

const AirlineSightingDetailViewModel = async (id) => {
    // const [sighting, setSighting] = useState(null);
    const response = await airlineSightingService.getSightingById(id);
    return new AirlineSightingModel(response.data)
};

export default AirlineSightingDetailViewModel;
