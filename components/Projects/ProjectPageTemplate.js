import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import BigImageContainer from "./ProjectPageComponents/BigImageContainer"
import SmallImageContainer from "./ProjectPageComponents/SmallImageContainer"
import programsPictureMapping from './programsPictureMapping';
import Image from "next/image";
import urlFor from "../../utils/sanityImageBuilder";
import useScreenResolution from '../../hooks/useScreenResolution';

function GoBackButton(props) {
    return (
        <Link href='/student-projects' style={{ textDecoration: 'none', marginTop: 'auto' }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: 2,
                color: 'black',
                marginTop: 2,
            }}>
                <ArrowBackIcon />
                <Typography>
                    {props.goBackButtonText}
                </Typography>
            </Stack>
        </Link>
    )
};

export default function ProjectPageTemplate(props) {
    const project = props.project[0];
    const goBackButtonText = props.goBackButtonText;
    const isMobile = useScreenResolution('lg');

    return (
        <Grid container sx={{
            marginTop: 5,
        }}>
            <Grid item lg={4} sx={{
                padding: 5,
                borderRight: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Box sx={{
                    marginBottom: 5,
                    display: 'inline-block',
                }}>
                    <Slide in timeout={1000} direction='right'>
                        <Box sx={{
                            borderTop: '2px solid black',
                            marginBottom: 3,
                            width: '50%'
                        }} />
                    </Slide>
                    <Typography variant='h5' sx={{ textTransform: 'uppercase' }}>
                        {project.title}
                    </Typography>
                </Box>

                {
                    project.content.map(text => (
                        <Typography key={text} sx={{ textAlign: 'justify' }}>
                            {text}
                        </Typography>
                    ))
                }

                <Typography sx={{
                    marginTop: 5,
                    marginBottom: 2
                }}>
                    ИЗПОЛЗВАНИ ПРОГРАМИ
                </Typography>

                <Stack sx={{
                    flexDirection: 'row',
                    gap: 2
                }}>
                    {
                        project.programmes.map((program, index) => {
                            return (
                                <Fade in
                                    timeout={1000}
                                    style={{ transitionDelay: `${index * 400}ms` }}
                                    key={program}
                                >
                                    <Stack sx={{
                                        flexDirection: 'column',
                                        gap: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '50%',
                                    }}>
                                        <Box sx={{
                                            border: '1px solid black',
                                            borderRadius: '50%',
                                            backgroundColor: 'black',
                                            height: '32px',
                                            width: '32px',
                                            overflow: 'hidden',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Image
                                                src={programsPictureMapping[program.toLowerCase().trim()]}
                                                alt='icon'
                                                width='20'
                                                height='20'
                                            />
                                        </Box>
                                        <Typography sx={{}}>
                                            {program}
                                        </Typography>
                                    </Stack>
                                </Fade>
                            )
                        })
                    }
                </Stack>

                {!isMobile && <GoBackButton goBackButtonText={goBackButtonText} />}
            </Grid>

            <Grid item xs={12} lg={8} sx={{ padding: 5 }}>
                <Grid container sx={{ gap: 2 }}>
                    {project.pictures[0] !== undefined &&
                        <BigImageContainer image={urlFor(project.pictures[0]).url()} />}
                    {project.pictures[1] !== undefined &&
                        <SmallImageContainer image={urlFor(project.pictures[1]).url()} />}
                    {project.pictures[2] !== undefined &&
                        <SmallImageContainer image={urlFor(project.pictures[2]).url()} />}
                    {project.pictures[3] !== undefined &&
                        <BigImageContainer image={urlFor(project.pictures[3]).url()} />}
                    {project.pictures[4] !== undefined &&
                        <BigImageContainer image={urlFor(project.pictures[4]).url()} />}
                    {project.pictures[5] !== undefined &&
                        <SmallImageContainer image={urlFor(project.pictures[5]).url()} />}
                    {project.pictures[6] !== undefined &&
                        <SmallImageContainer image={urlFor(project.pictures[6]).url()} />}
                </Grid>
            </Grid>

            {
                isMobile && <Grid item xs={12} sx={{ padding: '0 40px 40px' }}>
                    <GoBackButton goBackButtonText={goBackButtonText} />
                </Grid>
            }
        </Grid>
    )
};