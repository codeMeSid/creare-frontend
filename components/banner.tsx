import { Paper, Hidden } from '@material-ui/core';

const Banner = () => <Hidden smDown>
    <Paper elevation={2} className="banner">
        <img className="banner__image" src="https://i.pinimg.com/564x/a8/be/e8/a8bee804540d91c297626f73b51bf2d6.jpg" />
    </Paper>
</Hidden>

export default Banner;