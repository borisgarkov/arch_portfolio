import * as React from 'react';
import Head from "next/head";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from '../../utils/mainTheme';
import Footer from './Footer';
import SidebarMenu from './SidebarMenu';
import styles from './sidebar-style.module.css';
import Link from 'next/link';

export default function Navigation(props) {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [classNames, setClassNames] = React.useState([styles.sidebar]);

    const [menuIconText, setMenuIconText] = React.useState('Menu');

    const activeClass = styles.active;

    const handleDrawerClick = () => {
        setOpenDrawer(!openDrawer);

        if (classNames.includes(activeClass)) {
            setClassNames([styles.sidebar]);
            setMenuIconText('Menu');
        } else {
            setClassNames([styles.sidebar, activeClass]);
            setMenuIconText('Затвори');
        }
    };

    const navbarColor = { backgroundColor: '#ffffff' };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
                <title>Nikoleta Ivanova Portfolio</title>
                <meta name="description" content="architecture portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="/navbar-logo/nav-logo-black.png" />
            </Head>
            <AppBar position="fixed" elevation={0} sx={{
                ...navbarColor,
                width: '100%',
            }}>
                <Toolbar sx={{
                    ...navbarColor,
                }}>
                    <Link href='/home'>
                        <img src='/navbar-logo/nav-logo-black.png' alt='logo' width='40' height='40' />
                    </Link>

                    <Box sx={{
                        marginLeft: 'auto',
                        cursor: 'pointer',
                    }}
                        onClick={handleDrawerClick}
                    >
                        <span className={styles.menuIcon} style={{
                            transform: openDrawer ? 'translateY(12px) translate(-64px)' : 'none'
                        }}>
                            {menuIconText}
                        </span>
                        <div className={styles.trait1}></div>
                        <div className={styles.trait2} style={{
                            transform: openDrawer ? 'translateY(-9px)' : 'none',
                        }}></div>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{
                marginTop: '60px',
            }}>
                {
                    props.children
                }
            </Box>

            <SidebarMenu classNames={classNames} />
            <Footer />
        </ThemeProvider>
    )
}