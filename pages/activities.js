import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import activities from '../components/Activities/activities.json';
import PageTitleTemplate from '../components/CommonComponents/PageTitleTemplate';
import ActivitiesTemplate from '../components/Activities/ActivitiesTemplate';
import Seo from '../components/Seo/Seo';
import sanityClient from '../utils/sanityClient';
import FadeInTransition from '../components/Transitions/FadeInTransition';

export default function Activities({ activities }) {
    return (
        <>
            <Seo siteMetadata={{
                title: 'Дейности - Николета Иванова',
                description: 'Activities - Nikoleta Ivanova'
            }}></Seo>
            <FadeInTransition>
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
                                activities.map((activity, index) =>
                                    <React.Fragment key={activity._id}>
                                        <ActivitiesTemplate activity={activity} index={index} />
                                    </React.Fragment>
                                )
                            }
                        </Box>
                    </Box>
                </Navigation>
            </FadeInTransition>
        </>
    )
};

export async function getStaticProps(context) {
    const activities = await sanityClient.fetch(`*[_type == "activities"] | order(order_number asc)`);

    return {
        props: {
            activities
        }, // will be passed to the page component as props
    }
};