import React      from 'react';
import Container  from '@material-ui/core/Container';
import Toolbar    from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box        from '@material-ui/core/Box';
import Link       from '@material-ui/core/link';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    menuOption: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')] : {
            paddingLeft: theme.spacing(5)
        }
    }
}));

export default function NavigationBar() {

    const classes = useStyles();

    return(
        <Container>

            <Toolbar className={classes.toolbar}>

                <Typography>
                    
                    Final Fighters
                
                </Typography>
                
                <Box>
                    
                    {['home', 'roadmap', 'gallery', '', 'sign up'].map((menuOption) =>(
                        
                        <Link 
                            component="button"
                            variant='body1'
                            className={classes.menuOption}
                        >
                                {menuOption.toUpperCase()}
                        </Link>
                    
                    ))}

                </Box>
            
            </Toolbar>
        
        </Container>
    )
}