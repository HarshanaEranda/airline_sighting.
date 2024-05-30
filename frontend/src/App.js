import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AirlineSightingProvider from './contexts/AirlineSightingContext';
import HomeView from './views/HomeView';
import AddSightingView from './views/AddSightingView';
import SightingDetailView from './views/SightingDetailView';

const App = () => {
    return (
        <Router>
            <AirlineSightingProvider>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/add" element={<AddSightingView />} />
                    <Route path="/sighting/:id" element={<SightingDetailView />}   />
                </Routes>
            </AirlineSightingProvider>
        </Router>
    );
};

export default App;
