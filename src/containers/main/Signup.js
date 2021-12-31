import React from 'react';
import Grid           from '@material-ui/core/Grid';

import SignupGridItem from '../../components/main/SignupGridItem';

export default function Signup() {
    
  return (
    <Grid container spacing={3}>
    
    <Grid item lg={12} sm={12} xs={12}>
        <SignupGridItem />
    </Grid>
    </Grid>
  );
}