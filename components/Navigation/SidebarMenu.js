import { IconButton, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './sidebar-style.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function SidebarMenu(props) {
    const { classNames } = props;

    const initialProjectMenuStyle = {
        transition: 'transform 0.5s',
        transform: 'rotate(0deg)',
    };

    const initialSubProjectsMenuStyle = {
        transition: 'all 0.5s',
        opacity: '0',
        visibility: 'hidden',
        height: '0',
    }

    const [projectMenuItemStyle, setProjectMenuItemStyle] = useState(initialProjectMenuStyle);
    const [subProjectsMenuStyle, setSubProjectsMenuStyle] = useState(initialSubProjectsMenuStyle);

    const handleProjectItemClick = () => {
        if (projectMenuItemStyle.transform === 'rotate(0deg)') {

            setProjectMenuItemStyle({
                ...initialProjectMenuStyle,
                transform: 'rotate(90deg)',
            })

            setSubProjectsMenuStyle({
                ...subProjectsMenuStyle,
                opacity: '1',
                visibility: 'visible',
                height: '260px',
            })

        } else {
            setProjectMenuItemStyle(initialProjectMenuStyle)
            setSubProjectsMenuStyle(initialSubProjectsMenuStyle);
        }
    }

    const projectItems = [
        {
            num: 1,
            title: 'Студентски проекти',
            link: '/projects',
        },
        {
            num: 2,
            title: 'Предишен опит',
            link: '',
        },
        {
            num: 3,
            title: 'Проекти',
            link: '',
        },
        {
            num: 4,
            title: 'БалканАРХитрав',
            link: '',
        },
    ];

    return (
        <div className={classNames.join(' ')}>

            <Link className={styles.menuItem} href='/personal-info'>CV</Link>

            <Stack
                onClick={handleProjectItemClick}
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                <IconButton sx={{ ...projectMenuItemStyle, position: 'absolute', top: '23px', left: '-43px' }}>
                    <ArrowForwardIosIcon />
                </IconButton>
                <Link className={styles.menuItem} href=''>Проекти</Link>
            </Stack>

            <Stack sx={{
                ...subProjectsMenuStyle,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {
                    projectItems.map(item => (
                        <Link
                            key={item.num}
                            className={styles.projectMenuItem}
                            href={item.link}
                            style={{
                                transformOrigin: 'top center',
                                animation: `dropdownMenuAnimation 300ms ${item.num * 0.06}s ease-in-out forwards`
                            }}
                        >
                            {item.title}
                        </Link>
                    ))
                }
            </Stack>

            <Link className={styles.menuItem} href=''>Дейности</Link>
            <Link className={styles.menuItem} href='/contacts'>Контакти</Link>
        </div >
    )
};