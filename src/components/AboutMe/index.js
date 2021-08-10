import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    aboutMeGrid: {
        border: '1px solid pink'
    }
  }));

export default function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} className={classes.aboutMeGrid}>
                    picture
                </Grid>
                <Grid item xs={6} className={classes.aboutMeGrid}>
                    me
                </Grid>
            </Grid>
        </div>
    )
}
