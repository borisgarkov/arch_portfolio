import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import activities from '../components/Activities/activities.json';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import ActivitiesTemplate from '../components/Activities/ActivitiesTemplate';

export default function Activities() {
    return (
        <Navigation>
            <Box>
                <Box sx={{
                    padding: '0 30px',

                }}>
                    <PageTitleTemplate>
                        <Typography variant='h2'>Дейности</Typography>
                    </PageTitleTemplate>
                </Box>

                <Box
                    sx={{
                        width: '85%',
                        margin: '0 auto',
                    }}
                >
                    {
                        Object.values(activities).map((activity, index) =>
                            <React.Fragment key={activity.title}>
                                <ActivitiesTemplate activity={activity} index={index} />
                            </React.Fragment>
                        )
                    }
                </Box>
            </Box>
        </Navigation>
    )
};

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}