import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';

import { Link, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ffffff" };
    } else {
        return { color: "#ffffff" };
    }
};



function Menu({ history }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#03C58D' }}>
                <Toolbar>
                    <Link style={isActive(history, '/signup')} className="nav-link" to='/signup'>
                        Signup
                    </Link>
                    <Link
                        style={isActive(history, '/signin')}
                        className="nav-link" to="/signin">
                        Signin
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withRouter(Menu)