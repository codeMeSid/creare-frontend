import Link from 'next/link';
import { Grid, Hidden, Typography, Container, Button } from '@material-ui/core';

const Hero = () => {
    return <Container>
        <Grid container style={{ marginTop: 40 }}>
            <Grid item lg={6} md={12}>

                <Typography variant="h6" style={{ textTransform: "uppercase", marginLeft: 7, color: "#F16C21" }}>
                    learn anywhere
                </Typography>
                <Typography variant="h1" style={{ textTransform: "capitalize", fontWeight: "bold", color: "#0D3D55" }}>
                    let's creare
                </Typography>

                <Link href="/register/institute">
                    <a className="navlink--btn" style={{ textTransform: "capitalize" }}>
                        <Button variant="contained" style={{ marginTop: 80, backgroundColor: "#0d3d55", color: "white" }}>
                            register institute
                            </Button>
                    </a>
                </Link>

                <Link href="/donate">
                    <a style={{ textTransform: "capitalize" }}>
                        <Typography style={{ marginTop: 20 }}>
                            want to make a difference?
                        </Typography>
                    </a>
                </Link>

            </Grid>
            <Hidden mdDown>
                <Grid item lg={6}>
                    <iframe src="https://giphy.com/embed/HtaGVNHVnTNuw" width="100%" height="100%" frameBorder="0" allowFullScreen />
                </Grid>
            </Hidden>
        </Grid >
    </Container>
}

export default Hero;