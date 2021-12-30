import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React      from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../static/img/testimg.png';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: 400,
        backgroundImage: `url(${Image})`,
        color: theme.palette.common.white
    },
    mainItem: {
        padding: theme.spacing(3),
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

}))

export default function DiscoverGridItem() {

    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>

            <Grid item className={classes.mainItem} md={6}>

                <Typography component='h2' variant='h5'>
                DiscoverGridItemDiscoverGridItemDiscoverGridItem
                </Typography>

                <Typography variant='body1' paragraph>
                DiscoverGridItemDiscoverGridItemDiscoverGridItemDiscoverGridItem
                </Typography>
            </Grid>
        </Grid>
    )

}
