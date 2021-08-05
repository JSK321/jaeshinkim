import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    name: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid pink',
        fontSize: "100px"
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid pink',
        fontSize: '40px',
        '@media(max-width:450px)' : {
            textAlign:'center'
        }
    },
    toolbar: {
        minHeight: 75,
        // alignItems: 'flex-start',
        justifyContent:'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        border: '1px solid pink'
    },
    links: {
        marginLeft:"1rem",
        marginRight:'1rem',
        '@media(max-width:450px)' : {
            fontSize:"20px",
            marginLeft:"0.5rem",
            marginRight:'0.5rem',
        }
    },
}));

export default function ProminentAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="absolute">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.links} variant="h5">
                        About Me
                    </Typography>
                    <Typography className={classes.links} variant="h5">
                        Projects
                    </Typography>
                    <Typography className={classes.links} variant="h5">
                        Skills
                    </Typography>
                    <Typography className={classes.links} variant="h5">
                        Contact
                    </Typography>
                </Toolbar>
                <Typography className={classes.name}>
                    Jae Kim
                </Typography>
                <Typography className={classes.title}>
                    Full Stack Web Developer
                </Typography>
            </AppBar>
        </div>
    );
}
