import Grid from "@mui/material/Grid"
import BigImageContainer from "./ProjectPageComponents/BigImageContainer"
import SmallImageContainer from "./ProjectPageComponents/SmallImageContainer"
import urlFor from "../../utils/sanityImageBuilder"

export default function ProjectImages({ pictures }) {
    return (
        <Grid
            item
            xs={12}
            lg={8}
            sx={{ padding: 5 }}
        >
            <Grid
                container
                sx={{ gap: 2 }}
            >
                {pictures[0] !== undefined && <BigImageContainer image={urlFor(pictures[0]).url()} />}
                {pictures[1] !== undefined && <SmallImageContainer image={urlFor(pictures[1]).url()} />}
                {pictures[2] !== undefined && <SmallImageContainer image={urlFor(pictures[2]).url()} />}
                {pictures[3] !== undefined && <BigImageContainer image={urlFor(pictures[3]).url()} />}
                {pictures[4] !== undefined && <BigImageContainer image={urlFor(pictures[4]).url()} />}
                {pictures[5] !== undefined && <SmallImageContainer image={urlFor(pictures[5]).url()} />}
                {pictures[6] !== undefined && <SmallImageContainer image={urlFor(pictures[6]).url()} />}
                {pictures[7] !== undefined && <BigImageContainer image={urlFor(pictures[7]).url()} />}
            </Grid>
        </Grid>
    )
}
