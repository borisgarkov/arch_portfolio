import Navigation from "../../components/Navigation/Navigation";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from '../../components/Projects/project-page.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

export default function Projects(props) {
    const router = useRouter();
    const { project } = router.query;
    console.log(project);

    const skills = [
        {
            path: '/programmes-icons/archicad.png',
            title: 'Archicad'
        },
        {
            path: '/programmes-icons/autocad.png',
            title: 'Autocad'
        },
        {
            path: '/programmes-icons/lumoin.png',
            title: 'Lumoin'
        },
    ];

    return (
        <Navigation>
            <Grid container sx={{
                marginTop: 5
            }}>
                <Grid item lg={4} sx={{
                    padding: 5,
                    borderRight: '1px solid black',
                }}>
                    <Typography variant="h5">ХОТЕЛ НА МОРЕТО</Typography>
                    <Typography sx={{
                        marginTop: 2
                    }}>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using Content here
                        , content here, making it look like readable English. Many
                        desktop publishing packages and web page editors now use Lorem
                        Ipsum as their default model text, and a search for lorem ips
                        um will uncover many web sites still in their infancy. Variou
                        s versions have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like).
                    </Typography>
                    <Typography variant="h6" sx={{
                        margin: '16px 0'
                    }}>
                        ИЗПОЛЗВАНИ ПРОГРАМИ
                    </Typography>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px',
                        gap: 2
                    }}>
                        {
                            skills.map(skill => {
                                return (
                                    <Stack key={skill.title} sx={{
                                        flexDirection: 'row',
                                        gap: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        border: '1px solid black',
                                        borderRadius: '16px',
                                        padding: 1,
                                        height: '48px',
                                        backgroundColor: '#f5f5f5',
                                    }}>
                                        <img src={skill.path} alt='icon' width='16' height='16' />
                                        {skill.title}
                                    </Stack>
                                )
                            })
                        }
                    </Box>

                    <Link href='/projects' style={{ textDecoration: 'none' }}>
                        <Stack sx={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            gap: 2,
                            color: 'black',
                        }}>
                            <ArrowBackIcon />
                            <Typography sx={{
                                marginTop: 2,
                            }}>
                                Назад към другите проекти
                            </Typography>
                        </Stack>
                    </Link>
                </Grid>
                <Grid item lg={8} sx={{
                    padding: 5
                }}>
                    <Stack sx={{
                        flexDirection: 'row',
                        gap: 2,
                        justifyContent: 'space-evenly',
                        marginBottom: 2
                    }}>
                        <Box className={styles.imgBigContainer}>
                            <img
                                src='https://source.unsplash.com/random/tree/'
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                        <Box className={styles.imgSmallContainer}>
                            <img
                                src='https://source.unsplash.com/random/ocean/'
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                    </Stack>
                    <Stack sx={{
                        flexDirection: 'row',
                        gap: 2,
                        justifyContent: 'space-evenly',
                    }}>
                        <Box className={styles.imgSmallContainer}>
                            <img
                                src='https://source.unsplash.com/random/woman/'
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                        <Box className={styles.imgBigContainer}>
                            <img
                                src='https://source.unsplash.com/random/angel/'
                                alt='project-img'
                                className={styles.projectImg}
                            />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Navigation >
    )
};