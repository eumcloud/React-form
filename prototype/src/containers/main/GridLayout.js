import React from 'react';
import Grid           from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import MainGridItem from '../../components/main/MainGridItem';
import GridItem from '../../components/main/GridItem';
import Mando from '../../static/img/madal.jpg';

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
  thirdRow: {
    backgroundColor: 'pink'
  }
  
}));

export default function GridLayout() {
    
  return (
    <Grid container spacing={3}>
    
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem 
          title="Mandalorian Brotherhood"
          image={Mando}
          description="Mandalorian brotherhoods."
        />
      </Grid>
    
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem  
          title="Hired" 
          image=""
          description=""
        />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem 
          title="3D  " 
          image=""
          description=""
        />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem 
          title="Side Hustles" 
          image=""
          description=""
      />
      </Grid>
    
      <Grid item lg={4} md={12} sm={12} xs={12}>
        <GridItem  
          title="Game" 
          image=""
          description=""
        />
      </Grid>
    
    </Grid>
  );
}