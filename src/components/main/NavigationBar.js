import React, { useEffect, useState }      from 'react';
import {
  Container, 
  Toolbar,
  Typography,
  Box,
  AppBar,
  IconButton,
  MenuItem,
  Drawer,
  Tabs,
  Tab
} from '@material-ui/core'; 
import {Link} from 'react-router-dom';

import MenuIcon   from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  siteTitle: {
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: 'black'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    }
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  title: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(10),
      color: 'black'
    }
  },
  menuIcon: {
    color: 'black'
  },
  tabsContainer: {
    color: 'black'
  }
  
}));

export default function NavigationBar() {
  
  const [state, setState] = useState({
    toggleMenu: false,
    toggleMenuOpen: false
  });
  
  const { toggleMenu, toggleMenuOpen } = state;
  
  useEffect(() => {
    
    const setResponsiveness = () => {
      
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, toggleMenu: true  }))
        : setState((prevState) => ({ ...prevState, toggleMenu: false }));
      
    };
    
    setResponsiveness();
    
    window.addEventListener("resize", () => setResponsiveness());
    
  }, []);
  
  const classes = useStyles();
  
  const displayToggleMenu = () => {
    
    const handleToggleMenuOpen  = () => setState((prevState) => ({ ...prevState,  toggleMenuOpen: true  })); 
    const handleToggleMenuClose = () => setState((prevState) => ({ ...prevState,  toggleMenuOpen: false }));
    
      return(
        <Toolbar>

          <IconButton
            {...{onClick: handleToggleMenuOpen}}
          >
            <MenuIcon className={classes.menuIcon}/>
          </IconButton>

          <Drawer
            {...{
              anchor: 'left',
              open: toggleMenuOpen,
              onClose: handleToggleMenuClose
            }}
          >

            <div>
              {getToggleMenuOptions()}
            </div>


          </Drawer>

        </Toolbar>

      )
  }

  const getToggleMenuOptions = () => {
    return (

      <Box>
      {['roadmap', 'discover', 'gallery', 'sign up'].map((menuOption) => (
  
        <MenuItem> 

          {menuOption}

        </MenuItem>

      ))}
      </Box>
         
     
    )
  }

  const [routesTarget, setRoutesTarget] = useState({
  });

 
  
  const menuHandler = (e) => {
     
        switch(e.target.innerHTML) {
          case "ROADMAP":
            return setRoutesTarget('/');
              break;
          case "DISCOVER":
            return setRoutesTarget('/page2');
              break;
          case "GALLERY":
            return console.log("gallery access");
              break;
          case "SIGN UP":
            return console.log("sign up access");
              break;      
          default :
              break;  
        }
 
    console.log("error");
  }

  
  const headLink = [ 
    {title:'roadmap' , path: '/' }, 
    {title:'discover' , path: '/discover' },
    {title:'gallery' , path: '/gallery' },
    {title:'login' , path: '/login' }
  ];

  const displayLargeMenu = () => {
    
    return(
    <>
    <Toolbar className={classes.toolbar}>
    
        <Typography
          component='h1'
          variant='h6'
          className={classes.siteTitle}
        >
    
          Final fighters.
    
        </Typography>
        
        <Box className={classes.menuBox}>
          
            <Tabs className={classes.tabsContainer}>
              <Tab label="Roadmap" component={Link} to={"/"} />
              <Tab label="Discover"component={Link} to={"/discover"} />
              <Tab label="Gallery" component={Link} to={"/gallery"} />
              <Tab label="Signup" />
            </Tabs>



          {/* {headLink.map(({title, path}) => (
  
            <Ta
              href={path}
              component='tab'
              variant='body1'
              className={classes.title}
              onClick={menuHandler}
            >
              {title.toUpperCase()}
            </Ta>
            
    
          ))}
     */}
        </Box>
    
      </Toolbar>
      </>
    );
  }
  
  return (
    <Container>
    
      <AppBar style={{ background: 'white' }}> 
    
      {toggleMenu ? displayToggleMenu() : displayLargeMenu() }
    
      </AppBar>
 
    </Container>
  );
}