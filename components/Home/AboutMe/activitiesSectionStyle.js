const activitiesMainBox = {
    backgroundColor: 'mainPage.main',
    width: { xs: '100%', lg: '559px' },
    height: '100%',
    padding: { xs: 0, lg: 8 },
    position: 'relative',
    top: { lg: '40px' },
    zIndex: 2,
};

const iconsMainBox = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
    justifyContent: 'center',
    gridGap: '16px',
};

const iconsContainer = {
    transition: 'transform 1s',
    cursor: 'pointer',
    alignItems: 'center',
    width: '100%',
    '&:hover': {
        transform: 'scale(1.05)',
    }
};

const iconTitle = {
    textAlign: 'center',
    position: 'relative',
    top: '-20px',
};

const titleStyle = {
    textAlign: { xs: 'center', lg: 'left' },
    paddingTop: { xs: '50px', lg: '0px' },
};

export {
    activitiesMainBox,
    iconsMainBox,
    iconsContainer,
    iconTitle,
    titleStyle
};