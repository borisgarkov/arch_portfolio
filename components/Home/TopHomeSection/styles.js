const mainGridContainer = {
    width: '100%',
    marginBottom: { xs: 5, lg: 10 },
    marginTop: '95px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { lg: '0 80px' },
};

const gridItemText = {
    backgroundImage: 'url("/image-gallery-homepage/portfolioBackground.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: { xs: '200px', lg: '300px' },
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
};

const gridItemImageCaroussel = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'mainPage.main',
    // padding: { xs: 1, lg: 5 },
    gap: 2,
    position: 'relative',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    zIndex: '2',
};

const outerBoxImageCarousel = {
    zIndex: '2',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
};

const innerBoxImageCarousel = {
    display: 'flex',
    width: '100%',
    height: '100%',
    zIndex: '2',
    transition: 'transform 1s',
};

const mainTextStyle = {
    position: 'absolute',
    bottom: '25%',
    left: '5%',
    zIndex: 2,
    border: '2px solid white',
    padding: 10,
    width: '700px',
};

const typography = {
    color: 'white',
};

export {
    mainGridContainer,
    gridItemText,
    gridItemImageCaroussel,
    imageStyle,
    outerBoxImageCarousel,
    innerBoxImageCarousel,
    mainTextStyle,
    typography
}