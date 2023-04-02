const mainBoxStyle = {
    padding: { xs: '0 10px 10px 10px', lg: '0 30px 30px 30px' },
    // position: 'relative',
    backgroundImage: { lg: 'url("/contacts/contacts-image.webp")' },
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: { lg: '100vh' },
};

const sendButtonStyle = {
    backgroundColor: '#858585',
    '&:hover': { backgroundColor: '#858585' }
};

const gridContainerStyle = {
    width: { xs: '100%', lg: '50%' },
}

export {
    mainBoxStyle,
    sendButtonStyle,
    gridContainerStyle
};