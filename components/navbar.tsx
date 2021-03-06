import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Hidden } from "@material-ui/core";

const TabLogo = require("../public/assets/tab_icon.svg");

const Navbar = () => (
  <AppBar position={"sticky"} style={{ backgroundColor: "white", paddingTop: ".5rem" }} elevation={4}>
    <Toolbar >
      <img src={TabLogo} alt="Creare Logo" style={{ cursor: "pointer" }} />
      <div style={{ marginLeft: "auto" }}>
        <Hidden mdDown>
          <Link href="/">
            <a className="navlink">
              <Typography variant="button">
                home
            </Typography>
            </a>
          </Link>

          <Link href="/how">
            <a className="navlink">
              <Typography variant="button">
                how creare?
            </Typography>
            </a>
          </Link>

          <Link href="/blogs">
            <a className="navlink">
              <Typography variant="button">
                blogs
            </Typography>
            </a>
          </Link>

          <Link href="/contact">
            <a className="navlink">
              <Typography variant="button">
                contact us
            </Typography>
            </a>
          </Link>
          <Link href="/webinar">
            <a className="navlink">
              <Typography variant="button">
                webinars
            </Typography>
            </a>
          </Link>
          <Link href="/launch-event">
            <a className="navlink navlink--event">
              <Typography variant="button">
                launch event
            </Typography>
            </a>
          </Link>
        </Hidden>

        <Link href="/register/institute">
          <a className="navlink--btn" >
            <Button style={{ backgroundColor: "#0d3d55", color: "white" }} disableRipple variant="contained">Register Institute</Button>
          </a>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default Navbar;
