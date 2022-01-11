import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../../components/main/LoginGridItem';
import Signup from '../../components/main/SignupGridItem';
import Logout from '../../components/main/LogoutGridItem';
import { Grid } from '@material-ui/core';

const SignInOutContainer=()=>{

  const [value,setValue]=useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:510,margin:"100px auto"}

  function TabPanel(props) {
    
    const { children, value, index, ...other } = props;

      return (
        <Grid>
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                {children}
              </Box>
            )}
          </div>
        </Grid>
      );
  }
  
    return (
      <Grid container spacing={5}>
    
      <Grid item lg={12} sm={12} xs={12} margin-top="30px">
      <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Log In" />  
          <Tab label="Sign Up" />
          <Tab label="Log out" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Logout/>
      </TabPanel>
      </Paper>
      </Grid>
    </Grid>
       
    )
}

export default SignInOutContainer;