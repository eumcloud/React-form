import React, { useEffect, useState }      from 'react';
import {Link}                              from 'react-router-dom';
import MenuIcon                            from '@material-ui/icons/Menu';
import { makeStyles }                      from '@material-ui/core/styles';
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
import MypageNavItem from './MypageNavItem';

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
    toggleMenuOpen: false,
    isLoggedin: false
  });
  
  const { toggleMenu, toggleMenuOpen, isLoggedin } = state;
  
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
      {['roadmap', 'product', 'board', 'sign up', '/mypage'].map((menuOption) => (
  
        <MenuItem> 

          {menuOption}

        </MenuItem>

      ))}
      </Box>
         
     
    )
  }

  

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
              <Tab label="Product"component={Link} to={"/product"} />
              <Tab label="Board" component={Link} to={"/board"} />
              {isLoggedin ? <MypageNavItem /> : <Tab label="Signup"  component={Link} to={"/signup"} /> }
              <Tab label="/Mypage"component={Link} to={"/mypage"} />
              
            </Tabs>

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