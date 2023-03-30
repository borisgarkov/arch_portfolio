import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Fade from '@mui/material/Fade';
import * as React from 'react';
import Link from "next/link";
import styles from '../BalkanArhitrav/balkaarhitrav-style.module.css';
import Image from "next/image";
import urlFor from "../../utils/sanityImageBuilder";

export default function ProjectCoverTemplate({ title, sectionProjects }) {
    return (
        <>
            < Typography variant="h5" sx={{
                paddingLeft: 1.5,
            }}>
                {title}
            </Typography >
            {
                sectionProjects.map((project, index) => {
                    return (
                        <React.Fragment key={project._id} >
                            <Link href={`/student-projects/${project.slug.current}`} style={{
                                textDecoration: 'none', color: 'inherit'
                            }}>

                                <Fade key={project._id} in timeout={1000}
                                    style={{ transitionDelay: `${index * 400}ms` }}>
                                    <Stack className={styles.projectContainer} sx={{
                                        padding: '0 2.6vw',
                                        height: '350px',
                                        justifyContent: 'flex-end',
                                    }}>
                                        <Typography sx={{
                                            marginTop: 2,
                                            textAlign: 'right'
                                        }}>
                                            {project.title}
                                        </Typography>

                                        <Typography sx={{
                                            textAlign: 'right'
                                        }}>
                                            {project.city}
                                        </Typography>

                                        <Box className={styles.imageContainer} style={{ marginTop: '16px' }}>
                                            <img
                                                src={urlFor(project.pictures[0]).url()}
                                                alt=''
                                                width={245}
                                                height={245}
                                                className={styles.projectImg}
                                            />
                                        </Box>
                                    </Stack>
                                </Fade>
                            </Link>
                            <Divider sx={{ width: '70%', margin: '16px auto' }} />
                        </React.Fragment>
                    )
                })
            }
        </>
    )
};