import React from 'react'
// MUI
import { Box, Grid, Typography, } from '@mui/material'
// styles
import { css } from '@emotion/react'
import './styles.css'

const styles = {
    title: css`
    font-weight: bold;
    letter-spacing: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    `,
    secondaryTitle: css`
    letter-spacing: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    opacity: 0.5;
    `,
    skillsBox: css`
    display: block;
    padding: 7rem;
    `,
    skills: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.8;
    line-height: 5px;
    `,
    skillsSection: css`
    font-weight: bold;
    margin-bottom: 1rem;
    `,
}

export default function Skills() {
    return (
        <Box sx={styles.skillsBox}>
            <Typography
                variant="h6"
                component="h6"
                sx={styles.secondaryTitle}
            >
                WHAT I DO
            </Typography>
            <Typography
                variant="h3"
                component="h3"
                sx={styles.title}
            >
                SKILLS
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={3} sx={styles.skills}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={styles.skillsSection}
                    >
                        Languages
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        JavaScript
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        HTML
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        CSS
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={styles.skills}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={styles.skillsSection}
                    >
                        Libraries
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        React.js
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        Handlebars
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        jQuery
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={styles.skills}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={styles.skillsSection}
                    >
                        Frameworks
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        Node.js
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        Express.js
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        MUI
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        Bootstrap
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        Foundation
                    </Typography>
                </Grid>
                <Grid item xs={3} sx={styles.skills}>
                    <Typography
                        variant="h5"
                        component="h5"
                        sx={styles.skillsSection}
                    >
                        Tools
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        MySQL
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        MongoDB
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        GitHub
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                    >
                        Heroku
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
