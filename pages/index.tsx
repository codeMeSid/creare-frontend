import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Hero from '../components/hero';
import { Container, Paper, Typography } from '@material-ui/core';


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <div className="landing__section">
        <Container>
          <Typography variant="h3" style={{ textTransform: "capitalize", color: "#0d3d55" }}>
            the journey
          </Typography>
          <Paper className="landing__video">
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/x6Q7c9RyMzk"
              frameBorder="0"
              allowFullScreen />
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
