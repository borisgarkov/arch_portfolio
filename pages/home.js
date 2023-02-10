import React from 'react';
import Box from '@mui/material/Box';
import AboutMe from '../components/Home/AboutMe';
import Navigation from '../components/Navigation/Navigation';
import TopHomeSection from '../components/Home/TopHomeSection';
import AboutMeMobile from '../components/Home/AbouMeMobile';
import { Divider } from '@mui/material';

export default function Home() {
    return (
        <Navigation>
            <Box>
                <TopHomeSection />
                <Divider />
                <AboutMe />
                {/* <AboutMeMobile /> */}
            </Box>
        </Navigation >
    )
};