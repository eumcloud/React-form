import React from 'react';
import Grid           from '@material-ui/core/Grid';
import MainGridItem from '../../components/main/MainGridItem';



export default function GridLayout() {
    
  return (
    <Grid container spacing={3}>
    
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>


    </Grid>
  );
}