import React from 'react';
import Grid           from '@material-ui/core/Grid';

import GalleryGridItem from '../../components/main/GalleryGridItem';
import GridItem from '../../components/main/GridItem';
import Mando from '../../static/img/madal.jpg';


export default function Gallery() {
    
  return (
    <Grid container spacing={3}>
    
      <Grid item lg={12} sm={12} xs={12}>
        <GalleryGridItem />
      </Grid>

      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem 
          title="Discover"
          image={Mando}
          description="aaaaaaaaaaaaaaaaaaaaaaDiscover."
        />
      </Grid>
    
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <GridItem  
          title="Hired" 
          image=""
          description=""
        />
      </Grid>
    
    
    </Grid>
  );
}