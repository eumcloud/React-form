import React, { useState, useContext } from 'react';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Context } from '../../context';

axios.defaults.withCredentials = true

const Logout=()=>{
  
    const paperStyle={padding :20,height:'70vh',width:340, margin:"20px auto"}
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const { state, dispatch } = useContext(Context);

    console.log("STATE is :"+ JSON.stringify(state));

    const initialValues = {
        email: '',
        userpwd: '',
        remember: false
    }
    
    const onSubmit = async (values, props) => {
        
               dispatch({ 
                   type: "LOGOUT"
                })
                window.localStorage.removeItem('user')
                const {data} = await axios.get('/auth/logout');
                console.log(data.message);
                window.location.replace('/');
        
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Log out</h2>
                </Grid>
                <Formik onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Log out"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}


export default Logout



