const activitiesMainBox = {
    backgroundColor: 'mainPage.main',
    width: { lg: '559px' },
    height: '100%',
    padding: 8,
    position: 'relative',
    top: '40px',
    zIndex: 2,
};

const iconsMainBox = {
    display: 'grid',
    gridTemplateColumns: { xs: '100px 100px', lg: '250px 250px' },
    justifyContent: 'center',
    gap: 2,
};

const iconsContainer = {
    transition: 'transform 1s',
    cursor: 'pointer',
    alignItems: 'center',
    '&:hover': {
        transform: 'scale(1.05)',
    }
};

const iconTitle = {
    textAlign: 'center',
    position: 'relative',
    top: '-20px',
};

export {
    activitiesMainBox,
    iconsMainBox,
    iconsContainer,
    iconTitle
};