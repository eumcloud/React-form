import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';
import axios from 'axios';

export default function SignupGridItem() {
    
    const paperStyle = { padding: 40, width: 340, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const initialValues = {
        userid:                '',
        email:                 '',
        gender:                '',
        phoneNumber:           '',
        userpwd:               '',
        pwdConfirm:            '',
        termsAndConditions:    false
    }

    const validationSchema = Yup.object().shape({
        userid:                Yup.string().min(3, "It's too short").required("Required"),
        email:                 Yup.string().email("Enter valid email").required("Required"),
        gender:                Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber:           Yup.number().typeError("Enter valid Phone Number").required('Required'),
        userpwd:               Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        pwdConfirm:            Yup.string().oneOf([Yup.ref('userpwd')], "Password not matched").required("Required"),
        termsAndConditions:    Yup.string().oneOf(["true"], "Accept terms & conditions")
    })

    const onSubmit = (values, props) => {

        console.log(values)
        console.log(props)
        
        axios.post(`${process.env.REACT_APP_API}/post`, authController.signup , {userid, email, gender, userpwd, phoneNumber, pwdConfirm, termsAndConditions})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error)
        })

        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return(
        <Grid>
            <Paper style={paperStyle} >
                <Grid align='center' >
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                       <Form>

                       <Field as={TextField} fullWidth name="userid" label='userid'
                           placeholder="Enter your name" helperText={<ErrorMessage name="userid" />} />

                       <Field as={TextField} fullWidth name="email" label='Email'
                           placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />

                       <FormControl component="fieldset">
                           <FormLabel component="legend">Gender</FormLabel>
                           < Field as={RadioGroup} aria-label="gender" name="gender" name="gender" style={{ display: 'initial' }}>
                               <FormControlLabel value="female" control={<Radio />} label="Female" />
                               <FormControlLabel value="male" control={<Radio />} label="Male" />
                           </ Field>
                       </FormControl>
                       <FormHelperText><ErrorMessage name="gender" /></FormHelperText>

                       <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                           placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />

                       <Field as={TextField} fullWidth name='userpwd' type="password"
                           label='Password' placeholder="Enter your password"
                           helperText={<ErrorMessage name="userpwd" />} />

                       <Field as={TextField} fullWidth name="pwdConfirm" type="password"
                           label='Confirm Password' placeholder="Confirm your password"
                           helperText={<ErrorMessage name="pwdConfirm" />} />

                       <FormControlLabel
                           control={<Field as={Checkbox} name="termsAndConditions" />}
                           label="I accept the terms and conditions."
                       />

                       <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                       <Button type='submit' variant='contained' disabled={props.isSubmitting}
                           color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                   </Form>
                      )}
                      </Formik>
            </Paper>
        </Grid>
    )

}
  
