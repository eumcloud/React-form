import React      from "react";
import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainGridItem: {
        backgroundColor: 'blue'
    },
    secondRowFirstItem: {
        backgroundColor: 'green'
    },
    secondRowSecondItem: {
        backgroundColor: 'orange'
    },
    thirdRowFirstItem: {
      backgroundColor: 'red'
    },
    thirdRowSecondItem: {
      backgroundColor: 'pink'
    },
    thirdRowThirdItem: {
      backgroundColor: 'yellow'
    }
    
}));


export default function GridLayout() {

    const classes = useStyles();

    return(
        <Grid container spacing={3}>

            <Grid item lg={12} sm={12} xs={12}>
                <Typography className={classes.mainGridItem}>
                 Main grid Item
                </Typography>
            </Grid>
            
            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRowFirstItem}>
                 Second Row, First Item
                </Typography>
            </Grid>

            <Grid item sm={6} xs={12}>
                <Typography className={classes.secondRowSecondItem}>
                 Second Row Second Item
                </Typography>
            </Grid>

            <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRowFirstItem}>
          Third Row first Item
        </Typography>
      </Grid>
    
      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRowSecondItem}>
          Third Row Second Item
        </Typography>
      </Grid>

      <Grid item sm={4} xs={12}>
        <Typography className={classes.thirdRowThirdItem}>
          Third Row Third Item
        </Typography>
      </Grid>
        </Grid> 
    )
}