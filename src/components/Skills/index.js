import React from 'react'
// // Components
import FadeInSection from '../FadeInSection'
// MUI
import { Container, Grid, Typography, } from '@mui/material'
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
    color: #737373;
    `,
    secondaryTitle: css`
    letter-spacing: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    opacity: 0.5;
    color: #A6A6A6;
    @media (max-width: 300px) {
        letter-spacing: 2px;
    }
    `,
    skillsBox: css`
    display: block;
    padding: 7rem;
    @media (max-width: 400px) {
        padding: 4rem;
    }
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
    color: #A6A6A6;
    `,
    skillsList: css`
    color: #737373;
    `,
}

export default function Skills() {
    return (
        <FadeInSection>
            <Container sx={styles.skillsBox}>
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
                    <Grid item xs={12} sm={3} md={3} sx={styles.skills}>
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
                            sx={styles.skillsList}
                        >
                            JavaScript
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            HTML
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            CSS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} sx={styles.skills}>
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
                            sx={styles.skillsList}
                        >
                            React.js
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            Handlebars
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            jQuery
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} sx={styles.skills}>
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
                            sx={styles.skillsList}
                        >
                            Node.js
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            Express.js
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            MUI
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            Bootstrap
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            Foundation
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} sx={styles.skills}>
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
                            sx={styles.skillsList}
                        >
                            MySQL
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            MongoDB
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            GitHub
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={styles.skillsList}
                        >
                            Heroku
                        </Typography>
                    </Grid>
                </Grid>
            </Container >
        </FadeInSection>
    )
}
