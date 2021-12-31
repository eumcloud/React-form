import Grid       from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import  AddCircleOutlineOutlinedIcoun  from '@material-ui/icons/AddCircleOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import React      from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../static/img/testimg.png';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
    },
    signUpMain: {
        height: 800,
        color: theme.palette.common.white,
        justifyContent: 'center'
       
    }

}))

export default function SignupGridItem() {

    const classes = useStyles();

    const paperStyle = {
            padding: '30px 20px',
            width:300,
            margin:'20px auto'
    }
    const avatarStyle = {
        backgroundColor: '#1bbd7e'
    }
    const headerStyle = {
        backgroundColor: '#1bbd7e'
    }

    return(
        <Grid container className={classes.signUpMain}>

            <Grid item className={classes.mainItem} md={6}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcoun />
                    </Avatar>

                    <Paper elevation={20} style={paperStyle}>
                        <h2 style={headerStyle}>Sign up.</h2>
                      <Typography variant='caption'>Please fill this form to create an account.</Typography>  
                        <form>
                            <TextField fullWidth label='Name'/>
                            <TextField fullWidth label='Email'/>
                            <TextField fullWidth label='Phone Number'/>
                            <TextField fullWidth label='Password'/>
                            <TextField fullWidth label='Confirm Password'/>
                            <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )

}
