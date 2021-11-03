import React from 'react'
import Projects from '../../projects.json'
import ProjectsCard from '../ProjectsCard'
// MUI
import { Box, Typography, } from '@mui/material'
// styles
import { css } from '@emotion/react'

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
    portfolioBox: css`
    display: block;
    padding: 7rem;
    `,
}

const portfolio = Projects

export default function Portfolio() {
    return (
        <Box sx={styles.portfolioBox}>
            <Typography
                variant="h6"
                component="h6"
                sx={styles.secondaryTitle}
            >
                CHECKOUT MY WORK
            </Typography>
            <Typography
                variant="h3"
                component="h3"
                sx={styles.title}
            >
                PORTFOLIO
            </Typography>
            {portfolio.map((projectObj) => (
                <Box sx={styles.card}>
                    <ProjectsCard
                        key={projectObj.id}
                        id={projectObj.id}
                        name={projectObj.name}
                        image={projectObj.image}
                        github={projectObj.github}
                        link={projectObj.link}
                        description={projectObj.description}
                        technologies={projectObj.technologies}
                    />
                </Box>
            ))}
        </Box>
    )
}
