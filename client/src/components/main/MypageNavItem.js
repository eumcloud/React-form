import React  from 'react';
import {Link} from 'react-router-dom';
import {Tab}  from '@material-ui/core'; 

export default function MyapgaeNavItem(){
  return  <Tab label="Mypage" component={Link} to={"/mypage"} />
}