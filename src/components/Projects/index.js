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
    portfolioBox: css`
        display: block;
        padding: 7rem;
    `,
    card: css`
    `,
}

const portfolio = Projects

export default function Portfolio() {
    return (
        <Box sx={styles.portfolioBox}>
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
