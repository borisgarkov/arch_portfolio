const mainContainer = {
    marginBottom: { xs: 5, lg: 10 },
    height: '100vh',
};

const imageBox = {
    width: '100%',
    height: '100%',
    zIndex: '2',
    position: 'relative'
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '2',
};

const textBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // bottom: '25%',
    // left: '5%',
    zIndex: 2,
    border: '2px solid white',
    padding: 10,
    width: '700px',
};

const typography = {
    color: 'white',
};

export {
    mainContainer,
    imageStyle,
    imageBox,
    textBox,
    typography,
}