import { Box } from "@mui/material";

const backgroundColor = '#444444';

const CoverBox = ({ className, ...props }) => {
    return (
        <Box className={className} sx={{
            backgroundColor: backgroundColor,
            position: 'absolute',
            width: '100%',
            height: '100%',
            ...props
        }} />
    )
};

const imageStyle = {
    width: '100%',
    position: 'absolute',
};

const mainBoxStyle = {
    backgroundColor: backgroundColor,
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export {
    CoverBox,
    imageStyle,
    mainBoxStyle
}