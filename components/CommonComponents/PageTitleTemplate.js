import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";

export default function PageTitleTemplate(props) {
    return (
        <Box sx={{
            // marginTop: 15,
            paddingTop: 5,
            paddingBottom: 5,
            zIndex: 1,
            position: 'relative'
        }}>
            <Slide in timeout={1500} direction='right' easing='ease-out'>
                <Divider sx={{
                    marginBottom: 2,
                    width: '20vw',
                    borderColor: 'rgba(0, 0, 0, 1)',
                    borderWidth: '1px',
                }} />
            </Slide>
            {
                props.children
            }
        </Box>
    )
};