const mainBoxStyle = {
    padding: '0 30px 30px 30px',
    position: 'relative',
    backgroundImage: { lg: 'url("/contacts/contacts-image.webp")' },
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: { lg: '100vh' },
};

const textFieldStyle = {
    color: '#f3ede9',
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
    textFieldStyle,
    sendButtonStyle,
    gridContainerStyle
};