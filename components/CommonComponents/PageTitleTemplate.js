import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Divider from "@mui/material/Divider";

export default function PageTitleTemplate(props) {
    return (
        <Box sx={{
            // marginTop: 15,
            paddingTop: 5,
            paddingBottom: 5,
        }}>
            <Slide in timeout={1000} direction='right'>
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