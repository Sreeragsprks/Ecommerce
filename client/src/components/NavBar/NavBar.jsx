import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle, ShoppingCart, } from '@material-ui/icons'; 
import useStyles from './styles';

// TODO: update menu items fro account circle

const NavBar = ({appName}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position='static'>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {appName}
                    </Typography>
                    <IconButton
                        aria-label='show 2 cart items'
                        color='inherit'
                    >
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls='primary-search-account-menu'
                        aria-haspopup="true"
                        // onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
       
    )
}

export default NavBar
