import { Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

export default function GoBackButton(props) {
    return (
        <Link href={props.goBackLink} style={{ textDecoration: 'none', marginTop: 'auto' }}>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                gap: 2,
                color: 'black',
                marginTop: 2,
            }}>
                <ArrowBackIcon />
                <Typography>
                    {props.goBackButtonText}
                </Typography>
            </Stack>
        </Link>
    )
};