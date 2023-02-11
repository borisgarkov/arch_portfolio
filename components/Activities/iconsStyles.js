import picturesFolder from "./config";

const imageBox = {
    opacity: 0.7,
    backgroundImage: `url(${picturesFolder}/frame.png)`,
    backgroundSize: 'contain',
    width: { xs: '100px', lg: '170px' },
    height: { xs: '100px', lg: '170px' },
    position: 'relative',
};

export {
    imageBox,
}