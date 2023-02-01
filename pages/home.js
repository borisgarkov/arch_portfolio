import React from 'react';
import Box from '@mui/material/Box';
import AboutMe from '../components/Home/AboutMe';
import Navigation from '../components/Navigation/Navigation';
import TopHomeSection from '../components/Home/TopHomeSection';

export default function Home() {
    return (
        <Navigation>
            <Box>
                <TopHomeSection />
                <AboutMe />
            </Box>
        </Navigation >
    )
};